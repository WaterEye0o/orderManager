/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-21 22:25:28
 * @LastEditors: 吴华彬
 * @Note: 
 */
import '../../components/table/table-page'
import '../../components/omiu/breadcrumb'
export function List(){
    
    return<o-table-page 
    title='商品信息'
    columns={[
        {
            title: '序号',
        },
        {
            title: '名称',
        },
        {
            title: '单价',
        },
        {
            title: '库存',
        },
        {
            title: '预计交货日期',
        },
        {
            title: '默认发货地点',
        },
        {
            title: '数据状态',
        },
        {
            title: '使用状态',
        },
    ]}
    />
}