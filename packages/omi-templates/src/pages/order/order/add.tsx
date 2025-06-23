/*
 * @Author: 吴华彬
 * @Date: 2025-06-22 18:49:51
 * @LastEditTime: 2025-06-23 14:52:56
 * @LastEditors: 吴华彬
 * @Note: 
 */
/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:16:15
 * @LastEditTime: 2025-06-22 12:39:13
 * @LastEditors: 吴华彬
 * @Note: 
 */
import 'omi-form'
import '../../components/datePicker'
import { Component, tag } from 'omi'

const defaultProductsItem = {
      name: 'Silver',
      num:1
    }

@tag('o-order-add')
export class Add extends Component {

  state = {
    products: [Object.assign({},defaultProductsItem)],
    selected: []
  }

  onRowSelect (idx: any, isAll: any) {
        const allIndex = this.state.products.map((v: any, idx: any) => idx)
        if (isAll) {
            if (this.state.selected.length !== allIndex.length) {
                this.state.selected = allIndex
            } else {
                this.state.selected = []
            }
        } else {
            if (this.state.selected.indexOf(idx) > -1) {
                this.state.selected.splice(this.state.selected.indexOf(idx), 1)
            } else {
                this.state.selected.push(idx)
            }
        }
        this.update()

    }

  renderRowCheckbox(idx: string | number, isAll: boolean){
let checked = false
        if (isAll) {
            checked = this.state.selected.length === this.state.products.length
        } else {
            checked = this.state.selected.indexOf(idx) > -1
        }
        console.log('renderRowCheckbox',idx,checked)
        return <th scope="col" class="p-4">
            <div class="flex items-center">
                <input id="checkbox-all-search" checked={checked} onChange={() => this.onRowSelect(idx, isAll)} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>

        </th>
  }

  renderAddRow(index){

    return <div class="flex text-left max-w-28">
              <button
                type="button"
                onClick={()=>{
                  this.state.products[index].num=this.state.products[index].num-1
                  this.update()
                }}
                disabled={this.state.products[index].num===0}
                // id="decrement-button"
                data-input-counter-decrement="quantity-input"
                class="bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-600 hover:bg-zinc-200 border border-zinc-300 rounded-s-lg p-3 h-10 focus:ring-zinc-100 dark:focus:ring-zinc-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  class="w-3 h-3 text-zinc-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                value={this.state.products[index].num}
                data-input-counter
                aria-describedby="helper-text-explanation"
                class="bg-zinc-50 border-x-0 border-zinc-300 h-10 text-center text-zinc-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 border dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="999"
              />
              <button
                type="button"
                onClick={()=>{
                  console.log('this.state.products[index].num',this.state.products[index].num)
                  console.log('this.state.products[index]',this.state.products[index])
                  console.log('this.state.products',this.state.products)
                  this.state.products[index].num=this.state.products[index].num+1;

                  this.update()
                }}
                data-input-counter-increment="quantity-input"
                class="bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-600 hover:bg-zinc-200 border border-zinc-300 rounded-e-lg p-3 h-10 focus:ring-zinc-100 dark:focus:ring-zinc-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  class="w-3 h-3 text-zinc-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
  }

  renderTable () {
    return <div class='flex  flex-col'>
      <div class='flex flex-row justify-between p-5 items-center'>
        <div>
          商品信息
        </div>
        <o-button onClick={() => {
          this.state.products.push(Object.assign({},defaultProductsItem))
          this.update()
        }}>
          添加行
        </o-button>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
            {this.renderRowCheckbox('',true)}
            <th scope="col" class="px-6 py-3">
              商品信息
            </th>
            <th scope="col" class="px-6 py-3">
              数量
            </th>
            <th scope="col" class="px-6 py-3">
              操作
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map(({ name }, index) => {
            return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              {this.renderRowCheckbox(index,false)}
              <td class="px-6 py-4">
                {name}
              </td>
              <th scope="col" class="px-6 py-3">
              {this.renderAddRow(index)}
            </th>
              <td class="px-6 py-4" onClick={() => {
                this.state.products.splice(index, 1)
                this.update()
              }}>
                删除
              </td>
            </tr>
          })}

        </tbody>
      </table>
    </div>
  }

  renderAdress () {
    return <div>
      <div >
        收货地址
      </div>
      <div style="border:1px solid #E9E9E9;background:#fff" class='flex flex-row mt-1' >
        <div class='flex flex-row p-5  flex-1 justify-between'>
          <div>
            <div>收 货 人 : 大梨</div>
            <div>联系方式 : 180****1849</div>
            <div>收货地址 : 广东深圳市罗湖区清水河街道泥岗东路</div>
          </div>
          <a style='align-self:center' class='text-green-400'>修改地址</a>
        </div>
        <div style='height:60px;width:1px;background:#f1f1f1;align-self:center' />
        <div class='flex flex-row items-center w-60 justify-around'>
          <o-button>切换地址</o-button>
          <o-button>添加地址</o-button>
        </div>
      </div>
    </div>
  }

  renderOrderInfo () {
    return <div class='mt-5'>
      <div >
        订单信息
      </div>
      <div style="border:1px solid #E9E9E9;background:#fff" class='flex flex-row mt-1 p-1' >
        <div style='width:575px;height:50px;box-sizing: border-box;' class='flex flex-row items-center'>
          <div style='font-weight: 400;font-size: 12px;color: #333333;margin-left:18px;' class='mr-2'>
            订单编号
          </div>
          <input style='width: 250px;height: 30px;background: #F3F3F3;' />
        </div>
        <div style='width:575px;height:50px;box-sizing: border-box;' class='flex flex-row items-center'>
          <div style='font-weight: 400;font-size: 12px;color: #333333;margin-left:18px;' class='mr-2'>
            期望发货时间
          </div>
          <input style='width: 250px;height: 30px;background: #F3F3F3;' />
        </div>
      </div>
    </div>
  }

  renderRemark () {
    return <div class='mt-5'>
      <div >
        订单备注
      </div>
      <o-input class="w-full mx-auto mt-1" tag="textarea" rows="4" label="" />
    </div>
  }

  renderBottom () {
    return <div class='flex flex-row self-end items-center p-5'>
      <div class='mr-5'>总计金额：1234.00</div>
      <o-button>
        保存订单
      </o-button>
    </div>
  }

  render () {
    return <div style="border:1px solid #E9E9E9;background:#fff" class='w-full flex flex-col '>
      <div class='p-5'>
        {this.renderAdress()}
        {this.renderOrderInfo()}
        {this.renderRemark()}

      </div>
      {this.renderTable()}
      {this.renderBottom()}
    </div>
  }
}