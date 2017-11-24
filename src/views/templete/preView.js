import React from 'react'
import {Button, Card} from 'antd'

class PreView extends React.Component {
  render () {
    let menus = null
    if (this.props.menus) {
      menus = this.props.menus   //form填的
    }
    let menu = null
    if (this.props.menu) {
      menu = this.props.menu  //  user获取
    }
    let serviceMenu = []
    let zhidaMenu = null
    let sign = ""
    let temp = ""
    if (this.props.sign) {
      sign = this.props.sign
    }
    if (this.props.temp) {
      temp = this.props.temp
    }
    if (menus != null) {
        if (menus.zhidaName && menus.zhidaUrl) {
            zhidaMenu = {name: menus.zhidaName, url: menus.zhidaUrl}
        }
        if (menus.menuName1 && menus.menuUrl1) {
            serviceMenu.push({name: menus.menuName1, url: menus.menuUrl1})
        }
        if (menus.menuName2 && menus.menuUrl2) {
            serviceMenu.push({name: menus.menuName2, url: menus.menuUrl2})
        }
        if (menus.menuName3 && menus.menuUrl3) {
            serviceMenu.push({name: menus.menuName3, url: menus.menuUrl3})
        }
    }
    if (menu != null) {
      for (var j = 0; j < menu.length; j++) {
        if (!menu[j].type) {
            menu[j].type = 1
        }
        if (menu[j].type === 1) {
            serviceMenu.push(menu[j])
        } else {
            zhidaMenu = menu[j]
        }
      }
    }
    return (
     <div>
      <div style={{width: '100%', height: '50px', background: '#5a76d5', lineHeight: '50px', fontSize: '20px', textAlign: 'center', color: '#fff'}}>
        智能短信
      </div>
      <div className='panel-body'>
        <Card>
          <span style={{fontSize: '14px'}}>{sign ? <span>【{sign}】</span> :<span>【短信签名】</span>}</span>
          <span style={{fontSize: '14px', paddingLeft: '8px'}}>
              {
                temp
                ? temp
                : <span>尊敬的用户您好：感谢您************************************</span>
              }
          </span>
          <div className='custom-card'>
            {
              zhidaMenu !== null
              ? <a href={zhidaMenu.url} target='_blank' style={{float: 'right'}}>{zhidaMenu.name}&lt;&lt;</a>
              : null
            }
          </div>
        </Card>
      </div>
      <div className='panel-footer' style={{position: 'absolute', bottom: 0, left: 0, width: '100%'}}>
        {
          serviceMenu && serviceMenu.length > 0
          ? serviceMenu.map((item, index) => {
            return (
              <a href={item.url} target='_blank' key={item.name + index}><Button style={{width: (100 / serviceMenu.length) + '%'}} type='ghost'>{item.name}</Button></a>
            )
          })
          : null
        }
        </div>
    </div>
    )
  }
}


export default PreView
