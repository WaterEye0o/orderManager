/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:47:02
 * @LastEditTime: 2025-06-22 22:28:32
 * @LastEditors: 吴华彬
 * @Note: 
 */

import { bind, Component, tag } from 'omi'
// import '../omiu/tag.tsx'
// import '../dropdown/dropdown.tsx'
// import '../button/index.tsx'

type FeatureItem = {
    title: string,
    target: string
}

type columenItem = {
    title: string
}

type rowSelection = {
    type: 'checkbox' | 'radio'
}

type TableProps = {
    columns: columenItem[],
    data: any[],
    title: string,
    features: FeatureItem[],
    rowSelection?: rowSelection
}

@tag('o-product-list-page')
export class ProductListPage extends Component {

    rednerFilterItem(){
        return <div style='width:598px;height:50px;box-sizing: border-box;' class='flex flex-row items-center'>
            <div style='font-weight: 400;font-size: 12px;color: #333333;margin-left:18px;' class='mr-2'>报价单编号</div>
            <input style='width: 434px;height: 30px;background: #F3F3F3;' />
        </div>
    }

    renderProductItem(){
        return <div  style="border:1px solid #E9E9E9;width:280px;height:430px;background:#fff" class='shadow-sm'>
            <div>
                <img style="width:220px;heght:220px" src='https://www.tailwindcss.cn/img/refactoring-ui-sidebar.png'/>
            </div >
            <div class='p-2'>
                <div class='flex flex-row mb-2'>
                    <div style='font-weight:500;line-height: 20px;' class='mr-1'>00835454673</div>
                    <div style='width: 46px;height: 20px;background: #FF850D;color: #FFFFFF;font-size: 12px;border-radius: 10px;text-align: center;line-height: 20px;'>编号</div>
                </div>
                <div style='color:#666666;font-weight: 400;font-size: 14px;' class='mb-1'> 创建日期：2025-06-05</div>
                <div style='color:#666666;font-weight: 400;font-size: 14px;' class='mb-1'> 报价单状态：等待确认订单</div>
                <div style='color:#666666;font-weight: 400;font-size: 14px;' class='mb-1'> 验 证 人：张菲菲</div>
                </div>
            </div>
    }

    render (props: TableProps) {
        // const {columns} = props
        return <div>
            <div  style="border:1px solid #E9E9E9;background:#fff" class='w-full flex flex-row flex-wrap '>
                {this.rednerFilterItem()}
                {this.rednerFilterItem()}
                {this.rednerFilterItem()}
                {this.rednerFilterItem()}
                {/* {this.rednerFilterItem()} */}
            </div>

            <div  style="height:1000px" class='w-full mt-5 '>
                {this.renderProductItem()}
                
            </div>
        </div>
    }
}