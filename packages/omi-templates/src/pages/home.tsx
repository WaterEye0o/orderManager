/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 17:03:34
 * @LastEditTime: 2025-06-23 11:12:06
 * @LastEditors: 吴华彬
 * @Note: 
 */
import { isDark } from '../store.ts'
import '../components/omiu/button.tsx'
import '../components/omiu/swiper/swiper.tsx'
export function Home () {
  return (
    <div class='block'>
      <o-swiper>
        <div class='relative w-full'>
          <img src='../../static/swiper/1.png' class='block w-full' alt='...' />
        </div>

        <div class='relative w-full'>
          <img src='../../static/swiper/2.png' class='block w-full' alt='...' />
        </div>

        <div class='relative w-full'>
          <img src='../../static/swiper/3.png' class='block w-full' alt='...' />
        </div>
        <div class='relative w-full'>
          <img src='../../static/swiper/4.png' class='block w-full' alt='...' />
        </div>
      </o-swiper>
      <div class='flex flex-row align-self-center justify-self-center p-5'>
        <div class='relative'>
          <img style='width:228px;height:288px' class='mr-5' src='../../static/home_item_1/1.png' alt='...' />
          <div style='background: #00000090;color:#fff;width:228px;' class='absolute bottom-0 text-center'>
            定制化物流服务-发货状态订阅
          </div>
        </div>
        <div class='relative'>
          <img style='width:228px;height:288px' class='mr-5' src='../../static/home_item_1/2.png' alt='...' />
          <div style='width:228px;height:288px;background: #00000090;color:#fff' class='absolute flex flex-col items-center justify-center text-center top-0'>
            <div >
              施耐德客户服务平台
            </div>
            <div>
              客户可以查看通知/通知函/共享文件;完成年度续约协议签署;申请修改公司基本/关键信息;在线申请入账，解单，回传红字发票，发票寄
            </div>
          </div>
        </div>
        <div class='relative'>
          <img style='width:228px;height:288px' class='mr-5' src='../../static/home_item_1/3.png' alt='...' />
          <div style='background: #00000090;color:#fff;width:228px;' class='absolute bottom-0 text-center'>
            施耐德电气合作伙伴积分商城
          </div>
        </div>
      </div>

      <div style='background: #F1F1F1;' class='flex flex-row align-self-center justify-self-center p-5 w-full justify-center'>
        {[{
          imgSrc: '../../static/home_item_2/1.png',
          title: '现场服务平台',
          content: '客户可以在线申请现场服务 便捷地查询现场服务处理状态'
        }, {
          imgSrc: '../../static/home_item_2/2.png',
          title: '企业邮箱',
          content: '企业邮箱登录入口'
        }, {
          imgSrc: '../../static/home_item_2/3.png',
          title: '产品替换查询',
          content: '产品替换查询入口'
        }, {
          imgSrc: '../../static/home_item_2/4.png',
          title: 'MyCP客户服务平台',
          content: '施耐德电气客户服务平台'
        }].map(({ imgSrc, title, content }) => <div class='flex flex-col p-5 text-center items-center mr-5' style='width: 177px;height: 210px;background: #FFFFFF;'>
          <img src={imgSrc} style='width:75px;height:75px' />
          <div style='font-weight: bold;font-size: 15px;color: #333333;' class='mt-5'>{title}</div>
          <div style='font-weight: 400;font-size: 10px;color: #666666;' class='mt-1'>{content}</div>
        </div>
        )}

      </div>

      <div class='p-5 mt-5 flex flex-col items-center'>
        <div style='font-weight: bold;'>商务相关平台与文件</div>
        {[
          ['定制化物流服务-顺丰到付电请表','分销商商务政策'],
          ['mySE平台分销商培训资料','定制化物流股务-特殊运输服务中请表'],
          ['定制化物流股务宣传手册','OEM商务物流信息手册'],
          ['PB两务物流信息手册','分销商商务物流信息手册'],
          ['MT系列产品报价选型表','通过复制粘贴Excel电子表格中的内容导'],
          ].map((v)=><div class='flex flex-row mt-5'>
          {v.map((_v)=><div  style='width:368px;box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.1);' class='flex flex-row items-center justify-between p-2  mr-5'>
            <div style='font-weight: 400;font-size: 13px;color: #333333;'>
              {_v}
            </div>
            <img  style='width:20px;height:20px' src='/static/xiazai.png' />
          </div>)}
          {/* <div  style='width:368px' class='flex flex-row items-center justify-between p-2 shadow-lg mr-5'>
            <div>
              定制化物流服务-顺丰到付电请表
            </div>
            <img  style='width:20px;height:20px' src='../../static/xiazai.png' />
          </div>
          <div  style='width:368px' class='flex flex-row items-center justify-between p-2 shadow-lg'>
            <div>
              定制化物流服务-顺丰到付电请表
            </div>
            <img  style='width:20px;height:20px' src='../../static/xiazai.png' />
          </div> */}
        </div>)}
        
      </div>
    </div>
  )
}