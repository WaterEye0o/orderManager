/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-22 13:39:41
 * @LastEditors: 吴华彬
 * @Note: 
 */
import '../../../components/table/table-page'
import '../../../components/omiu/breadcrumb'
export function List () {
    return <o-table-page
        title='发货单列表'
        features={[
            {title:'新增'}
        ]}
        columns={[
            {
                title: '序号',
            },
            {
                title: '单据编号',
            },
            {
                title: '单据状态',
            },
            {
                title: '经销商名称',
            },
            {
                title: '备注',
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
                title: '期望发货日期',
            },
            {
                title: '期望发货地址',
            },
        ]}
    />
}