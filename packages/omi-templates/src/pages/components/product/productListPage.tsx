/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:47:02
 * @LastEditTime: 2025-06-23 01:10:41
 * @LastEditors: 吴华彬
 * @Note: 
 */

import { bind, Component, tag } from 'omi'
import '../pagination'
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

enum FilterEnum {
    option='option',
    input='input',
    date='date'
}

type FilterItem = {
    type:'option'|'input'|'date'
    title:string
    data:any
}

type TableProps = {
    columns: columenItem[],
    data: any[],
    title: string,
    features: FeatureItem[],
    rowSelection?: rowSelection

    filters:FilterItem[]
}

@tag('o-product-list-page')
export class ProductListPage extends Component<TableProps> {

    rednerFilterBox(title){
        return <div style='width:598px;height:50px;box-sizing: border-box;' class='flex flex-row items-center'>
            <div style='font-weight: 400;font-size: 12px;color: #333333;padding-left:18px;width:100px' >{title}</div>
            <input style='width: 434px;height: 30px;background: #F3F3F3;' />
        </div>
    }

    renderFilterOptionTagItem({title}){
        return <div style='height: 24px;' class='flex flex-row items-cente ml-4'>
                    <div class="flex items-center">
                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
            <div style='font-weight: 400;font-size: 12px;color: #666666;line-height: 24px;'
            class='ml-2'
            >
                {title}
                </div>
        </div>
    }


    renderFilterOptionBox({options,title}){
         return <div style='height:50px;' class='w-full flex flex-row items-center'>
            <div style='font-weight: 400;font-size: 12px;color: #333333;padding-left:18px;width:100px' >{title}</div>
            <div class='flex-1 flex flex-row items-cente'>
                <div 
                style='width: 55px;height: 24px;background: #F3F3F3;font-weight: 400;font-size: 12px;color: #666666;text-align:center;line-height:24px'
                class='cursor-pointer'
                >
                    不限
                    </div>
                    {options.map(({title})=>this.renderFilterOptionTagItem({title}))}
            </div>
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
                {this.props.filters.map(({type,data,title})=>{
                    switch(type){
                        case FilterEnum.option: return this.renderFilterOptionBox({options:data,title})
                        case FilterEnum.input: return this.rednerFilterBox(title)
                        default:return <div/>
                    }
                })}
            </div>

            <div  style="height:1000px" class='w-full mt-5 '>
                {this.renderProductItem()}
                
            </div>

            <o-pagination></o-pagination>
        </div>
    }
}