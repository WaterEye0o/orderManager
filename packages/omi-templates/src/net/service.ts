// http://116.228.31.185:8025/ierp/kapi/oauth2/getToken

import { post } from './net';

// const 

export function getToken (params:any) {
    // return post('/oauth2/getToken',params)
    return post('/oauth2/getToken', params)
}

/*
*发货单查询
*/
export function shkd_invoice_query (params:any) {
    // return post('/oauth2/getToken',params)
    return post('/v2/shkd/shkd_replatform/shkd_invoice/shkd_invoice_query', {
        data:params,
        pageSize:10,
        pageNo:1
    })
}

/*
*报价单查询
*/
export function shkd_quotation_quer (params:any) {
    // return post('/oauth2/getToken',params)
    return post('/v2/shkd/shkd_replatform/shkd_quotation/shkd_quotation_quer', params)
}

/*
*订单查询
*/
export function shkd_order_query (params:any) {
    // return post('/oauth2/getToken',params)
    return post('/v2/shkd/shkd_replatform/shkd_order/shkd_order_query', params)
}