import React from 'react'
const style={
    layouot: {
        fontSize: '14px',
        margin: '16px'
    },
    content: {
        marginLeft: '10px'
    }
}
class SmsDetail extends React.Component {
    render () {
        const {plan_name, template, menu, created, tags} = this.props
        let zhidaMenu = null
        let serviceMenu = []
        if (menu !== null) {
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
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="panel-heading" style={{backgroundColor: '#fff', marginBottom: '20px', height: '50px'}}>
                        <h5 style={{lineHeight: '30px'}}>计划详情</h5>
                    </div>
                    <div style={style.layouot}>
                        <span>计划标题：</span><span style={style.content}>{plan_name}</span>
                    </div>
                     <div style={style.layouot}>
                        <span>短信内容：</span><span style={style.content}>{template}</span>
                    </div>
                    <div style={style.layouot}>
                        {
                            zhidaMenu !== null
                            ? <div>
                                <span>直达号：</span>
                                <span style={style.content}>{zhidaMenu.name}&lt;&lt;</span>
                                <span style={style.content}>{zhidaMenu.url}</span>
                             </div>
                            : null
                        }
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={style.layouot}>菜单:</div>
                        <div style={style.layouot}>
                            {
                                serviceMenu && serviceMenu.length > 0
                                ? serviceMenu.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <span>{item.name}</span>
                                            <span style={style.content}>{item.url}</span>
                                        </div>
                                    )
                                })
                                : null
                            }
                        </div>
                    </div>
                    <div style={style.layouot}>
                        <span>客户人群:</span>
                        {
                            tags && tags.length > 0
                            ? tags.map((item, index) => {
                                return (
                                    <span key={item.tag_id} style={style.content}>{item.tag_name}</span>
                                )
                            })
                            : null
                        }
                    </div>
                    <div style={style.layouot}>
                        <span>预约营销时间：</span><span style={style.content}>{created}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SmsDetail