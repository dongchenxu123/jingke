import request from '../util/request'


const reqObj = {
    tagStats:  `customer?do=tag-stats`,
    getTags: `customer?do=get-tags`,
    addTask: `market?do=add-task`
}

export function createPlan(sendData) {
    return request({
        url: reqObj.addTask,
        method: 'post',
        data: sendData
    })
}