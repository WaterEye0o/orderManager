/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-22 19:55:45
 * @LastEditors: 吴华彬
 * @Note: 
 */
import '../../../components/table/table-page'
import '../../../components/omiu/breadcrumb'
import { bind, Component,tag } from 'omi'

@tag('shop-list')
export class List extends Component {

    state={
        addOrderDisabled:true
    }

    @bind
    onRowSelect(e){
console.log('onRowSelect',e)
            this.state.addOrderDisabled = e.detail.selected.length === 0
            this.update()
    }
    render(){

    return<o-table-page 
    title='购物车'
    features={[{
        title:'生成订单',
        disabled:this.state.addOrderDisabled
    }]}
    rowSelection={{
        type:'checkbox'
    }}
    onRowSelect={this.onRowSelect}
    columns={[
        {
            title: '序号',
        },
        {
            title: '编码',
        },
        {
            title: '商品名称',
        },
        {
            title: '数量',
        },
        {
            title: '单价',
        },
        {
            title: '总价',
        },
        {
            title: '使用状况',
        },
    ]}
    />
    }
}