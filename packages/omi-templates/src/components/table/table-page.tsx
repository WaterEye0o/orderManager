/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:47:02
 * @LastEditTime: 2025-06-21 23:06:10
 * @LastEditors: 吴华彬
 * @Note: 
 */

import { Component, tag } from 'omi'
import '../omiu/tag.tsx'
import '../dropdown/dropdown.tsx'
import '../button/index.tsx'

type columenItem = {
    title: string
}

type TableProps = { columns: columenItem[], data: any[] }

@tag('o-table-page')
export class TablePage extends Component {

    static defaultProps: TableProps = {
        columns: [],
        data: []
        // className: '',
    }


    state = {
        // filter:
    }

    renderTHeader (props: { columns: columenItem[] }) {
        const { columns } = props
        return <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {/* <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>

                </th> */}
                {columns.map(({ title }) => <th scope="col" class="px-6 py-3">
                    {title}
                </th>)}
            </tr>
        </thead>
    }

    renderPageHeader () {
        return <div class="p-5 flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <div class="relative">
                <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input style="line-height:30px" type="text" id="table-search-users" class="block ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="搜索编码/名称"
                 />
            </div>
            <o-dropdown
                color="primary"
                options={[
                    {
                        label: '可用',
                        value: 'available',
                    }
                ]}
            >可用</o-dropdown>
        </div>
    }

    renderTBody (props) {
        return <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">
                    1
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    }

    renderTableTitleView(props){
        const {title} =props
        return <div class='m-5 justify-between flex flex-row items-center'>
            <div>
                {title}
            </div>
            <o-button> 新增</o-button>
        </div>
    }

    render (props: { columns: columenItem[] }) {
        // const {columns} = props
        return <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-md">
                {this.renderPageHeader()}
            </div>

            <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mt-5">
                {this.renderTableTitleView(props)}
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {this.renderTHeader(props)}
                    {this.renderTBody(props)}

                </table>
            </div>
        </div>
    }
}