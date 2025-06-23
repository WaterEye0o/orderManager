import { signal, effect } from 'omi'
import './components/dark-switch'

export const isDark = signal(document.documentElement.classList.contains('dark'))

document.addEventListener('DOMContentLoaded', () => {
  isDark.value = document.documentElement.classList.contains('dark')
})

effect(() => {
  if (isDark.value) {
    window.setDarkMode()
  } else {
    window.setLightMode()
  }
})

interface NavbarItem {
  path?: string
  value?: string
  children?: NavbarItem[]
  type?: string
  text?: string
  href?: string
  target?: string
  img?: string
  inner?: string
  tag?: string
  icon?: string
  isOpen?: boolean
}

export const navbarItems = signal<NavbarItem[]>([
  {
    text: '首页',
    path: '/',
    value: 'home',
  },
  {
    text: '商品目录',
    icon: 'root-list',
    href: '#/product/list',
    isOpen: true,
    children: [
      {
        text: '商品列表',
        value: 'productList',
        href: '#/product/list',
      },
      {
        text: '新增商品',
        value: 'addProduct',
        href: '#/product/add',
      },
    ],
  },
  {
    text: '库存查询',
    icon: 'root-list',
    href: '#/quotation/list',
    isOpen: true,
    
  },
  {
    text: '订单创建',
    icon: 'root-list',
    href: '#/order/add',
    isOpen: true,
    
  },
  {
    text: '报价单',
    icon: 'root-list',
    href: '#/quotation/list',
    isOpen: true,
    
  },
  {
    text: '发货单',
    icon: 'root-list',
    href: '#/shipment/list',
    isOpen: true,
    
  },

  // {
  //   text: 'OMI官网',
  //   href: 'http://omijs.org/',
  // },
  // {
  //   text: '张三',
  //   img: 'https://omi.cdn-go.cn/admin/latest/home/omi.svg',
  //   children: [
  //     {
  //       text: '个人中心',
  //       path: '/personal',
  //       value: 'personal',
  //     },
  //     {
  //       text: '退出登录',
  //       path: '/login',
  //     },
  //   ],
  // },
  // {
  //   href: 'https://github.com/Tencent/omi/tree/master/packages/omi-templates',
  //   target: '_blank',
  //   inner: `<svg class="h-6 w-6 dark:text-foreground" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  // </svg>`,
  // },
  // {
  //   tag: 'dark-switch',
  // },
])

const value = getValueByPath(location.hash.slice(1), navbarItems.value)
export const activeMenuItem = signal(value || 'home')

export function getValueByPath(path: string, navbarItems: NavbarItem[]): string | null {
  for (let i = 0; i < navbarItems.length; i++) {
    if (navbarItems[i].path === path) {
      return navbarItems[i].value || null
    }
    if (navbarItems[i].children) {
      // @ts-ignore
      let found = getValueByPath(path, navbarItems[i].children)
      if (found) return found
    }
  }
  return null // return null if no matching path is found
}

export const sidebarItems = signal<NavbarItem[]>([
  {
    text: '商品',
    icon: 'root-list',
    href: '#/product/list',
    isOpen: true,
    children: [
      {
        text: '商品列表',
        value: 'productList',
        href: '#/product/list',
      },
      {
        text: '新增商品',
        value: 'addProduct',
        href: '#/product/add',
      },
    ],
  },
  {
    text: '购物车',
    icon: 'root-list',
    href: '#/product/list',
    isOpen: true,
    children: [
      {
        text: '购物车列表',
        value: 'shopCarList',
        href: '#/shopCar/list',
      },
      {
        text: '新增购物车',
        value: 'addShopCar',
        href: '#/shopCar/add',
      },
    ],
  },
  {
    text: '报价单',
    icon: 'root-list',
    href: '#/product/list',
    isOpen: true,
    children: [
       {
        text: '报价单列表',
        value: 'quotationList',
        href: '#/quotation/list',
      },
      {
        text: '生成订单',
        value: 'addQuotation',
        href: '#/quotation/add',
      },
    ],
  },
  {
    text: '发货单',
    icon: 'root-list',
    href: '#/product/list',
    isOpen: true,
    children: [
       {
        text: '发货单列表',
        value: 'shipmentList',
        href: '#/shipment/list',
      },
    ],
  },
])

export const activeSidebarItem = signal('productList')
export const isSidebarOpen = signal(true)
