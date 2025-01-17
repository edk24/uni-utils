import request from "@/utils/request";

export function apiUserGet() {
    return request.get({
        url: '/api/user/get',
    }, {
        ignoreCancel: true,
    })
}