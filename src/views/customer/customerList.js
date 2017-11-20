import React from 'react'
import { Collapse, Radio, Checkbox, Button, message } from 'antd'
import request from '../../util/request'
import PeopleModal from './peopleModal'
import CustomerTable from './customerTable'
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Panel = Collapse.Panel

const Obj = {
    condList: `customer?do=get-cond-list`,
    searchList: `customer?do=get-customers`,
    addTag: `customer?do=add-tag`

}
function condList(){
    let option={
        url: Obj.condList
    }
    return request(option)
}

function searchList (data) {
    let  option={
        url: Obj.searchList,
        method: 'post',
        data: {
            conds: JSON.stringify(data)
        }
    }
    return request(option)
}
function addTag (data) {
    let  option={
        url: Obj.addTag,
        method: 'post',
        data: {
            data: JSON.stringify(data)
        }
    }
    return request(option)
}
class CustomerList extends React.Component {
    constructor () {
        super()
        this.state ={
        //    age: {},
           gender: {},
           cate: {},
           location: {},
           order: {},
           price: {},
           orderValue: '',
        //    ageValue: [],
           locationValue: [],
           priceValue: [],
           cateValue: [],
           genderValue: [],
           peopoleModal: false,
           customerData: [],
           loading: false
        }
    }
    componentDidMount () {
       condList().then(data => {
            this.setState({
                // age: data.age || {},
                gender: data.gender || {},
                cate: data.cate || {},
                location: data.location || {},
                order: data.order || {},
                price: data.price || {}
            })
        })
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
         orderValue: e.target.value
        });
    }
    // onChangeChart = (checkedValues) => {
    //    this.setState({
    //      ageValue: checkedValues
    //     });
    // }
    onChangeLocation = (checkedValues) => {
        this.setState({
            locationValue: checkedValues
        })
        console.log('locationValue = ', checkedValues);
    }
    onChangePrice = (checkedValues) => {
        this.setState({
            priceValue: checkedValues
        })
        console.log('priceValue = ', checkedValues);
    }
    onChangecate = (checkedValues) => {
        this.setState({
            cateValue: checkedValues
        })
        console.log('cateValue = ', checkedValues);
    }
    onChangegender = (checkedValues) => {
        this.setState({
            genderValue: checkedValues
        })
        console.log('genderValue = ', checkedValues);
    }
    
    saveData = () => {
        const {orderValue, locationValue, priceValue, cateValue, genderValue} = this.state
        let selectOrder = []
        if (orderValue != '') {
             selectOrder.push(orderValue)
        }
        let data={
            order: selectOrder,
            // age: ageValue,
            location: locationValue,
            price: priceValue,
            cate: cateValue,
            gender: genderValue
        }
        return data
    }
    submitOnsearch = () => {
        const data = this.saveData()
        this.setState({
            loading: true
        })
        searchList(data).then(res =>{
            console.log(res)
            this.setState({
                customerData: res.data,
                loading: false
            })
        })
    }
    createPeople = () => {
        this.setState({
            peopoleModal: true
        })
    }
    savePeople = (values) => {
        const data = this.saveData()
        const peopleName = values.peopleName
        const itemData ={
            conds: data,
            name: peopleName
        }
        const _this = this
        addTag (itemData).then(res =>{
            console.log(res)
            if (res === 'OK') {
                message.success('创建成功！')
                _this.setState({
                    peopoleModal: false
                })
            }
        })
    }
    handleCancel = () => {
        this.setState({
            peopoleModal: false
        })
    }
    render () {
        const {order, location, price, cate, gender} = this.state
        return (
            <div>
                <div className="panel panel-default" style={{marginBottom: '20px'}}>
                    <div className="panel-body">
                        <Collapse defaultActiveKey={['1', '2']}> 
                            <Panel header='订单' key="1">
                                    {
                                        order.values && order.values.length > 0
                                        ? <RadioGroup onChange={this.onChange} value={this.state.orderValue}>
                                                {
                                                order.values.map((item, index) => {
                                                    return (
                                                        <Radio value={item.value} key={item.value}>{item.label}</Radio>
                                                    )
                                                })
                                                }
                                            </RadioGroup>
                                        
                                        : null
                                    }
                                </Panel>
                                <Panel header='地域' key="2">
                                    {
                                        location.values && location.values.length > 0
                                        ? <CheckboxGroup options={location.values} onChange={this.onChangeLocation} />
                                        : null
                                    }
                                </Panel>
                                <Panel header='客单价' key="3">
                                    {
                                        price.values && price.values.length > 0
                                        ? <CheckboxGroup options={price.values} onChange={this.onChangePrice} />
                                        : null
                                    }
                                </Panel>
                                <Panel header='类目' key="4">
                                    {
                                        cate.values && cate.values.length > 0
                                        ? <CheckboxGroup options={cate.values} onChange={this.onChangecate} />
                                        : null
                                    }
                                </Panel>
                                {/* <Panel header='年龄' key="5">
                                    {
                                        age.values && age.values.length > 0
                                        ? <CheckboxGroup options={age.values} onChange={this.onChangeChart} />
                                        : null
                                    }
                                </Panel> */}
                                <Panel header='性别' key="6">
                                    {
                                        gender.values && gender.values.length > 0
                                        ? <CheckboxGroup options={gender.values} onChange={this.onChangegender} />
                                        : null
                                    }
                                </Panel>
                        </Collapse>
                        <div style={{width: '300px', margin: '20px auto'}}>
                            <div>
                                <Button type="primary" onClick={this.submitOnsearch} icon="search">搜索</Button>
                                <Button type="primary" onClick={this.createPeople} style={{marginLeft: '10px'}}>保存搜索条件为客户人群</Button>
                            </div>
                        </div>
                    </div>
                    <PeopleModal visible={this.state.peopoleModal}
                                savePeople={this.savePeople}
                                onCancel={this.handleCancel}
                                />
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <CustomerTable customerData={this.state.customerData} loading={this.state.loading}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerList