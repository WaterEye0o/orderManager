/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-22 19:00:10
 * @LastEditors: 吴华彬
 * @Note: 
 */
import { Component, tag } from 'omi'
import 'omi-form'
import '../../components/datePicker'


const config = {
  validate: (Joi: any) => Joi.object({
    code: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
    price: Joi.string().empty(''),
    inventory: Joi.string().empty(''),
    estimateDeliveryDate: Joi.string().empty(''),
    address: Joi.string().empty(''),
  }),
  components: [
    {
      type: 'h1',
      text: '新增商品',
    },
    {
      type: 'divider',
    },
    {
      type: 'input',
      defaultValue: '',
      name: 'code',
      placeholder: '编码不能为空',
      label: '编码',
      tooltip: '',
    },
    {
      type: 'input',
      defaultValue: '',
      name: 'name',
      placeholder: '名称不能为空',
      label: '名称',
      tooltip: '',
    },
    {
      type: 'input',
      props: { type: 'number' },
      name: 'price',
      label: '单价',
      // placeholder: 'Age',
    },
    {
      type: 'input',
      props: { type: 'number' },
      name: 'inventory',
      label: '库存',
      // placeholder: 'Age',
    },
    {
      type: 'custom',
      component: 'o-date-picker',
      props: { type: 'number' },
      name: 'estimateDeliveryDate',
      label: '预计交货日期',
      // placeholder: 'Age',
    },
    {
      type: 'input',
      defaultValue: '',
      name: 'address',
      //   placeholder: '编码不能为空',
      label: '默认发货地',
      tooltip: '',
    },
    {
      type: 'input',
      defaultValue: '',
      name: 'creator',
      //   placeholder: '编码不能为空',
      label: '创建人',
      tooltip: '',
    },
  ],
  submitButton: true,
  resetButton: true,
  primaryColor: '#45a049',
  labelStyle: {
    // width: 125,
    align: 'top', // left, right, top
  },
  style: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    background: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  },
}

// 序号 订货号
// 商品名称
// 数量 标准折扣（下浮点） 折扣后单价（含税） 折扣后总价（含税） 预计交付日期

const ProductTable = () => {
  return <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
 <th scope="col" class="px-6 py-3">
                    序号
                </th>

 <th scope="col" class="px-6 py-3">
                    订货号
                </th>

 <th scope="col" class="px-6 py-3">
                    数量
                </th>

 <th scope="col" class="px-6 py-3">
                    标准折扣（下浮点）
                </th>

 <th scope="col" class="px-6 py-3">
                    折扣后单价（含税）
                </th>

 <th scope="col" class="px-6 py-3">
                    折扣后总价（含税）
                </th>

 <th scope="col" class="px-6 py-3">
                    预计交付日期
                </th>
      </tr>
    </thead>
     <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4">
                        1
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple 
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
  </table>
}

export function Add () {

  return <div class='flex flex-row'>
    <o-form config={config} />
    <div class='block'>
      <div class='p-5'>商品信息</div>
      {ProductTable()}
    </div>
  </div>
}