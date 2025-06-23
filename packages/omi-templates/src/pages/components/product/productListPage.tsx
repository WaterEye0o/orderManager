/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:47:02
 * @LastEditTime: 2025-06-24 00:16:18
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
    option = 'option',
    input = 'input',
    date = 'date'
}

type FilterItem = {
    key: string
    type: 'option' | 'input' | 'date'
    title: string
    data: any
}

type ItemField = {
    title: string
    key: string
}

type TableProps = {
    columns: columenItem[],
    data: any[],
    title: string,
    features: FeatureItem[],
    rowSelection?: rowSelection

    filters: FilterItem[]
    itemsField: ItemField[]
    request?: any
}

@tag('o-product-list-page')
export class ProductListPage extends Component<TableProps> {


    state: any = {
        filters: {},
        data: [],
        pageNo: 1,
    }

    request: any = null
    installed () {
        if (!this.request) {
            this.request = this.props.request
        }

        this.getData()
    }

    async getData () {
        if (this.request && typeof this.request === 'function') {
            const params = this.props.filters.reduce((pre, val) => {
                if (this.state.filters && this.state.filters[val.key]) {
                    return ({ ...pre, [`${val.key}`]: this.state.filters[val.key] })
                } else {
                    return ({ ...pre })
                }
            }, {})
            const res = await this.request(params)
            if (res.data.rows) {
                this.state.data = res.data.rows
                this.update()
            }
        }
    }

    rednerFilterBox ({ title, key }) {
        return <div style='width:598px;height:50px;box-sizing: border-box;' class='flex flex-row items-center'>
            <div style='font-weight: 400;font-size: 12px;color: #333333;padding-left:18px;width:100px' >{title}</div>
            <input
                value={this.state.filters[key]}
                onInput={(e) => {
                    this.state.filters[key] = e.target.value
                    this.update()
                }} onKeyDown={(v) => { v.keyCode == 13 && this.getData() }} style='width: 434px;height: 30px;background: #F3F3F3;' />
        </div>
    }

    renderFilterOptionTagItem ({ title }) {
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


    renderFilterOptionBox ({ options, title, key }) {
        return <div style='height:50px;' class='w-full flex flex-row items-center'>
            <div style='font-weight: 400;font-size: 12px;color: #333333;padding-left:18px;width:100px' >{title}</div>
            <div class='flex-1 flex flex-row items-cente'>
                <div
                    style='width: 55px;height: 24px;background: #F3F3F3;font-weight: 400;font-size: 12px;color: #666666;text-align:center;line-height:24px'
                    class='cursor-pointer'
                >
                    不限
                </div>
                {options.map(({ title }) => this.renderFilterOptionTagItem({ title }))}
            </div>
        </div>
    }

    renderProductItem (data, index) {
        const itemsField = this.props.itemsField || []
        const item = this.state.data[index]
        return <div style="border:1px solid #E9E9E9;width:280px;height:430px;background:#fff" class='shadow-sm mr-3'>
            {/* <div>
                <img style="width:220px;heght:220px" src='https://www.tailwindcss.cn/img/refactoring-ui-sidebar.png' />
            </div > */}
            <div class='p-2'>
                {itemsField.map(({ title, key }) => {
                    if (title == '编号') {
                        return <div class='flex flex-row mb-2'>
                            <div style='font-weight:500;line-height: 20px;' class='mr-1'>{item[key]}</div>
                            <div style='width: 46px;height: 20px;background: #FF850D;color: #FFFFFF;font-size: 12px;border-radius: 10px;text-align: center;line-height: 20px;'>编号</div>
                        </div>
                    } else {
                        return <div style='color:#666666;font-weight: 400;font-size: 14px;' class='mb-1'> {title}:{item[key]}</div>
                    }
                })}
                {/* <div class='flex flex-row mb-2'>
                    <div style='font-weight:500;line-height: 20px;' class='mr-1'>00835454673</div>
                    <div style='width: 46px;height: 20px;background: #FF850D;color: #FFFFFF;font-size: 12px;border-radius: 10px;text-align: center;line-height: 20px;'>编号</div>
                </div>
                <div style='color:#666666;font-weight: 400;font-size: 14px;' class='mb-1'> 创建日期：2025-06-05</div>
                <div style='color:#666666;font-weight: 400;font-size: 14px;' class='mb-1'> 报价单状态：等待确认订单</div>
                <div style='color:#666666;font-weight: 400;font-size: 14px;' class='mb-1'> 验 证 人：张菲菲</div> */}
            </div>
        </div>
    }

    render (props: TableProps) {
        console.log('render')
        // const {columns} = props
        return <div>
            <div style="border:1px solid #E9E9E9;background:#fff" class='w-full flex flex-row flex-wrap '>
                {this.props.filters.map(({ type, data, title, key }) => {
                    switch (type) {
                        case FilterEnum.option: return this.renderFilterOptionBox({ options: data, title, key })
                        case FilterEnum.input: return this.rednerFilterBox({ title, key })
                        default: return <div />
                    }
                })}
            </div>

            <div style="height:1000px" class='w-full mt-5 flex flex-row '>
                {this.state.data.map(this.renderProductItem.bind(this))}

            </div>

            <o-pagination></o-pagination>
        </div>
    }
}