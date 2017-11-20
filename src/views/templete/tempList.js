import React from 'react'
import {Button, Icon, Modal, message} from 'antd'
import FormView from './form'
import request from '../../util/request'
const reqObj = {
    recharge: `user?do=set-sms-menu`
    
}
function userRecharge(values) {
    const menulists = []
    const { menuName1, menuName2, menuName3, menuUrl1, menuUrl2, menuUrl3, zhidaUrl, zhidaName } = values
    if (menuName1 && menuUrl1) {
        menulists.push({name: menuName1, url: menuUrl1, type: 1})
    }
    if (menuName2 && menuUrl2) {
        menulists.push({name: menuName2, url: menuUrl2, type: 1})
    }
    if (menuName3 && menuUrl3) {
        menulists.push({name: menuName3, url: menuUrl3, type: 1})
    }
    if (zhidaName && zhidaUrl) {
        menulists.push({name: zhidaName, url: zhidaUrl, type: 2})
    }
    let data = {
        menu: menulists
    }
    let option={
        url: reqObj.recharge,
        method: 'post',
        data: {
            data: JSON.stringify(data)
        }
    }
    return request(option)
}



class TempListView extends React.Component {
    submitMenu = (values) => {
        userRecharge(values).then(data => {
            console.log(data)
           if (data === "OK") {
             message.success('创建成功!')
           }
        })
    }
    render () {
        return (
            <div>
                <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                    <h5 style={{lineHeight: '30px', fontSize: '14px'}}>菜单编辑中，请确认菜单编辑完成后点击“保存”，每次编辑后的菜单审核都需要1-3个工作日，如有需要请提前编辑</h5>
                </div>
                <div className="panel panel-default">
                    <FormView submitMenu={this.submitMenu}
                              />
                </div>
            </div>
        )
    }
}

export default TempListView