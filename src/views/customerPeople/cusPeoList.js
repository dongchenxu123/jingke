import React from 'react'
import {Button, Input, Icon} from 'antd'
import CusPeoTable from './cusPeoTable'
import { createPeoTags } from '../../help/linkUrl'
import {Link} from 'react-router-dom'
const Search = Input.Search;
class CusPeoList extends React.Component {
    render () {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading" style={{marginBottom: '20px'}}>
                        <Search
                            placeholder="人群名称"
                            style={{ width: 300 }}
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div className="panel-body">
                        <Link to={createPeoTags}>
                            <Button type='primary'>
                                <Icon type="plus-circle" />
                                <span style={{fontSize: '16px'}}>创建客户人群</span>
                            </Button>
                        </Link>
                        <span style={{paddingLeft: '15px', fontSize: '14px', color: '#999'}}>注：客户人群=查询条件组合，包含的名单是实时变动的，请在使用时关注客户人群包含的客户数量！</span>
                    </div>
                </div>
                <CusPeoTable />
            </div>
        )
    }
}

export default CusPeoList