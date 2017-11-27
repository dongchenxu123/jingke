import request from '../util/request'

const reqObj = {
    userinfo:  `user?do=get-shop-info`
}

export function getUser() {
    return request({url:reqObj.userinfo})
}