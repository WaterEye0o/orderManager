/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-23 01:00:20
 * @LastEditors: 吴华彬
 * @Note: 
 */
import '../../../components/table/table-page'
import '../../../components/omiu/breadcrumb'
export function List () {
    return <o-product-list-page
    filters={[
        {
            type:'input',
            title:'报价单编号'
        },
        {
            type:'input',
            title:'采购报价单号'
        },
        {
            type:'input',
            title:'创建日期'
        },
        {
            type:'input',
            title:'是否为SEIT(SPC)报价单'
        },
        {
            type:'input',
            title:'报价单状态'
        },
        {
            type:'input',
            title:'订单创建渠道'
        },
    ]}
     />
}