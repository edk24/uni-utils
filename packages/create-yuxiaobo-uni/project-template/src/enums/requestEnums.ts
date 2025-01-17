export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // form-data   上传资源（图片，视频）
    FORM_DATA = 'multipart/form-data;charset=UTF-8'
}

export enum RequestMethodsEnum {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT'
}

export enum RequestCodeEnum {
    SUCCESS = 0, //成功
    FAILED = 1, // 失败
    INVALID_LOGIN = 4001, // TOKEN参数无效
}

export enum RequestErrMsgEnum {
    ABORT = 'request:fail abort',
    TIMEOUT = 'request:fail timeout'
}
