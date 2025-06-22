/*
 * @Author: 吴华彬
 * @Date: 2025-06-22 18:49:51
 * @LastEditTime: 2025-06-22 23:23:22
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


@tag('o-order-add')
export class Add extends Component {

  renderTable () {
    return <div class='flex  flex-col'>
      <div class='flex flex-row justify-between p-5 items-center'>
        <div>
          商品信息
        </div>
        <o-button>
          添加行
        </o-button>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
            <th scope="col" class="px-6 py-3">
              商品信息
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4">
              Silver
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  }

  renderAdress () {
    return <div>
      <div >
        收货地址
      </div>
      <div style="border:1px solid #E9E9E9;background:#fff"  class='flex flex-row mt-1' >
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

  renderOrderInfo(){
    return <div class='mt-5'>
      <div >
          订单信息
        </div>
        <div style="border:1px solid #E9E9E9;background:#fff"  class='flex flex-row mt-1 p-1' >
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

  renderRemark(){
return <div class='mt-5'>
  <div >
          订单备注
        </div>
        <o-input class="w-full mx-auto mt-1" tag="textarea" rows="4" label="" />
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
    </div>
  }
}