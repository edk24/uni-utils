import HttpRequest from './http'
import { merge } from 'lodash-es'
import type { HttpRequestOptions, RequestHooks } from './type'
import { RequestCodeEnum, RequestMethodsEnum } from '@/enums/requestEnums'
import { getToken } from '@/services/auth'
import { showToast } from 'yuxiaobo-uni-helper'

const requestHooks: RequestHooks = {
    requestInterceptorsHook(options, config) {
        const { urlPrefix, baseUrl, withToken, isAuth } = config
        options.header = options.header ?? {}
        if (urlPrefix) {
            options.url = `${urlPrefix}${options.url}`
        }
        if (baseUrl) {
            options.url = `${baseUrl}${options.url}`
        }
        
        // 添加token
        const token = getToken()
        if (withToken && !options.header.token) {
            options.header.authorization = token
        }

        return options
    },
    responseInterceptorsHook(response, config) {
        const { isTransformResponse, isReturnDefaultResponse, isAuth } = config

        //返回默认响应，当需要获取响应头及其他数据时可使用
        if (isReturnDefaultResponse) {
            return response
        }
        // 是否需要对数据进行处理
        if (!isTransformResponse) {
            return response.data
        }
        const { code, data, msg, show } = response.data as any
        switch (code) {
            case RequestCodeEnum.SUCCESS:
                msg && show && showToast(msg)
                return data
            case RequestCodeEnum.FAILED:
                showToast(msg)
                return Promise.reject(msg)

            // 未登录
            case RequestCodeEnum.INVALID_LOGIN:
                console.log('🔥未登录:', config);
                // uni.navigateTo({
                //     url:'/pages/index/index'
                // })
                // nextTick(() => {
                //     setTimeout(() => {
                //         wechatOa.getUrl()
                //     }, 1)
                // })
                
                return Promise.reject()
            default:
                return data
        }
    },
    responseInterceptorsCatchHook(options, err) {
        if (options.method?.toUpperCase() == RequestMethodsEnum.POST) {
            console.log('🔥请求失败:', err, options)
        }
        return Promise.reject()
    },
}

const defaultOptions: HttpRequestOptions = {
    requestOptions: {
        timeout: 10 * 1000,
        header: { version: '1.0.0' },
    },
    // baseUrl: '',
    baseUrl: `${import.meta.env.VITE_APP_BASE_URL || ''}`,
    //是否返回默认的响应
    isReturnDefaultResponse: false,
    // 需要对返回数据进行处理
    isTransformResponse: true,
    // 接口拼接地址
    urlPrefix: '',
    // 忽略重复请求
    ignoreCancel: false,
    // 是否携带token
    withToken: true,
    isAuth: false,
    retryCount: 2,
    retryTimeout: 300,
    requestHooks: requestHooks,
}

function createRequest(opt?: HttpRequestOptions) {
    return new HttpRequest(
        // 深度合并
        merge(defaultOptions, opt || {})
    )
}
const request = createRequest()
export default request
