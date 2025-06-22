/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-23 01:06:22
 * @LastEditors: 吴华彬
 * @Note: 
 */
import '../../../components/table/table-page'
import '../../../components/omiu/breadcrumb'
import '../../components/product/productListPage'

export function List(){
    return <div><o-product-list-page
    filters={[
        {
            type:'option',
            title:'产品类型',
            data:[
                        {title:'电器附件'},
                        {title:'配电'},
                        {title:'附件'},
                        {title:'iC60'},
                    ]
        },
        {
            type:'option',
            title:'极      数',
            data:[
                        {title:'2P'},
                        {title:'3P'},
                    ]
        },
        {
            type:'option',
            title:'产品短名',
            data:[
                        {title:'iC60L'},
                        {title:'iC60N'},
                    ]
        },
    ]}
     />
     </div>
}