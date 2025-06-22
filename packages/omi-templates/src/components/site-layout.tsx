import { Component, VNode, tag } from 'omi'
import './navbar.tsx'
import { navbarItems, activeMenuItem } from '../store.ts'
import { CustomizeButton } from './customize-button.tsx'
import tdesignLogo from '../assets/tdesign.svg?raw'

/* Because the menu needs to update user avatars, a separate component is packaged for local updates */
@tag('navbar-wrpapper')
class NavbarWrapper extends Component {
  render () {
    return (
      <o-navbar items={navbarItems.value} active={activeMenuItem.value} onInstalled={window.refreshDark}></o-navbar>
    )
  }
}

export function SiteLayout (props: { hideFooter?: boolean; current?: string; children?: VNode | VNode[] }) {
  return (
    <div class="bg-[#fafafa] pt-[56px] dark:bg-background dark:text-foreground">
      <header class="bg-white dark:bg-background/10 dark:text-foreground bg-opacity-40 backdrop-filter backdrop-blur-md py-2 top-0 shadow fixed w-full px-4 md:px-0 z-[100000]">
        <div class="container mx-auto flex justify-between items-center">
          <div class='flex'>
            <div class="text-xl font-bold">
              <a class="text-zinc-800 dark:text-white" title="TDesign" unsafeHTML={{ html: tdesignLogo }} href="#/"></a>
            </div>

            <div class="flex items-center">
              <NavbarWrapper />
            </div>
          </div>
          <div class='flex items-center'>
            <div class="relative mr-10">
              <input style="line-height:30px;border-radius:30px" type="text" id="table-search-users" class="block ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="输入商品关键词"
              />
              <div class="absolute right-0 inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            </div>
            <div>我的购物车</div>
          </div>
        </div>
      </header>
      <div style="width:1200px" class='justify-self-center'>
       <div class='m-5 mb-1 ml-1'>
         <o-breadcrumb
        items={[
          {
            label: 'Home',
            icon: 'home',
            href: '#/',
          },
          {
            label: '基础数据',
            href: '#/product/list'
          },
          {
            label: '商品列表',
            href: '#/product/list'
          },
        ]}
      />
       </div>


      {props.children}
      </div>

      {!props.hideFooter && (
        <section class="bg-[#eeeeee] dark:bg-background dark:text-foreground px-4 md:px-0 border-t">
          <div class="container  mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接1</h2>
              <ul class="text-zinc-600 dark:text-foreground">
                <li>
                  <a href="#">链接1</a>
                </li>
                <li>
                  <a href="#">链接2</a>
                </li>
                <li>
                  <a href="#">链接3</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接2</h2>
              <ul class="text-zinc-600 dark:text-foreground">
                <li>
                  <a href="#">链接1</a>
                </li>
                <li>
                  <a href="#">链接2</a>
                </li>
                <li>
                  <a href="#">链接3</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接3</h2>
              <ul class="text-zinc-600 dark:text-foreground">
                <li>
                  <a href="#">链接1</a>
                </li>
                <li>
                  <a href="#">链接2</a>
                </li>
                <li>
                  <a href="#">链接3</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接4</h2>
              <ul class="text-zinc-600 dark:text-foreground">
                <li>
                  <a href="#">链接1</a>
                </li>
                <li>
                  <a href="#">链接2</a>
                </li>
                <li>
                  <a href="#">链接3</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      <CustomizeButton />

      {!props.hideFooter && (
        <footer class="bg-[#e7e7e7] border-t dark:bg-background dark:text-foreground py-6">
          <div class="container mx-auto text-center">
            <p class="text-zinc-600 dark:text-foreground">© 2024 Tencent OMI. All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  )
}
