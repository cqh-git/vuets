import instance from '../axios/index'
export function postAccount(params: object) {
    return instance({
        url: '/account/verification',
        method: 'post',
        data: params
    })
}
export function getData(params: object) {
    return instance({
        url: '/getUser/info',
        method: 'get',
        params: params
    })
}
