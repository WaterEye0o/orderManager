/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-23 23:55:54
 * @LastEditors: 吴华彬
 * @Note: 
 */
import '../../../components/table/table-page'
import '../../../components/omiu/breadcrumb'
import '../../components/product/productListPage'
import { shkd_invoice_query } from '../../../net/service'
export function List () {
    return <o-product-list-page
    request={shkd_invoice_query}
    itemsField={[
        {
            title:'编号',
            key:'billno'
        },
        {
            title:'创建日期',
            key:'createtime'
        },
        {
            title:'单据状态',
            key:'billstatus_title'
        },
        {
            title:'公司名称',
            key:'shkd_company'
        },
        {
            title:'发货地点',
            key:'shkd_deladdress'
        },
        {
            title:'承运商名称',
            key:'shkd_carrier'
        },
        {
            title:'承运商电话',
            key:'shkd_carriertel'
        },
        {
            title:'物流状态',
            key:'shkd_deliverstatus_title'
        },
    ]}
    filters={[
        {
            type:'input',
            key:'billno',
            title:'单据编号'
        },
        {
            type:'input',
            key:'id',
            title:'id'
        },
        
    ]}
     />
}