import React from 'react'
import {Button, Card} from 'antd'

class PreView extends React.Component {
  render () {
    let menus = this.props.menus
    let serviceMenu = []
    if (menus != null) {
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
   console.log(serviceMenu)
   
    return (
     <div>
      <div style={{width: '100%', height: '50px', background: '#5a76d5', lineHeight: '50px', fontSize: '20px', textAlign: 'center', color: '#fff'}}>
        智能短信
      </div>
      <div className='panel-body'>
        <Card>
          <span style={{fontSize: '14px'}}>【短信签名】</span>
          <span style={{fontSize: '14px', paddingLeft: '8px'}}>
              尊敬的用户您好：感谢您************************************
          </span>
          <div className='custom-card'>
            {
              menus && menus.zhidaName && menus.zhidaUrl
              ? <a href={menus.zhidaUrl} target='_blank' style={{float: 'right'}}>{menus.zhidaName}&lt;&lt;</a>
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
