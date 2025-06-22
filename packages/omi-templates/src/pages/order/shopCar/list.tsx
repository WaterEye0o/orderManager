/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-22 13:58:01
 * @LastEditors: 吴华彬
 * @Note: 
 */
import '../../../components/table/table-page'
import '../../../components/omiu/breadcrumb'
export function List(){
    
    return<o-table-page 
    title='购物车'
    features={[{title:'新增'}]}
    rowSelection={{
        type:'checkbox'
    }}
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