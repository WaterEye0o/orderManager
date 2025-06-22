import 'omi-suspense'
import './index.css'
import { SiteLayout } from './components/site-layout'
import { AdminLayout } from './components/admin-layout'
import { ComponentLayout } from './components/component-layout'
import { pending } from './components/pending'
import { fallback } from './components/fallback'
import { Router } from 'omi-router'
import { Component } from 'omi'
import './components/appear'

export const routes = [
  createRoute('/', () => import('./pages/login')),
  createRoute('/product/list', () => import('./pages/order/product/list')),
  createAdminRoute('/product/add', () => import('./pages/order/product/add')),
  createAdminRoute('/shopCar/list', () => import('./pages/order/shopCar/list')),
  createAdminRoute('/shopCar/add', () => import('./pages/order/shopCar/add')),
  createAdminRoute('/shipment/list', () => import('./pages/order/shipment/list')),
  createAdminRoute('/shipment/add', () => import('./pages/order/shipment/add')),
  createAdminRoute('/quotation/list', () => import('./pages/order/quotation/list')),
  createAdminRoute('/quotation/add', () => import('./pages/order/quotation/add')),

  createBaseRoute('/login', () => import('./pages/login')),
  createAdminRoute('/admin/home', () => import('./pages/admin/home')),
  createRoute('*', () => import('./pages/results/not-found')),
  {
    path: '/before-enter/test',
    beforeEnter: () => {
      // reject the navigation
      return false
    },
  },
]

function createRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <SiteLayout current={router.currentRoute?.path}>
          <o-suspense
            minLoadingTime={400}
            imports={[componentImport()]}
            customRender={(results: { [x: string]: Function }[]) => {
              return (
                <o-appear
                  class="opacity-0 translate-y-4"
                  onReady={() => {
                    window.refreshDark()
                    window.scrollTo(0, 0)
                  }}
                >
                  {results[0][Object.keys(results[0])[0]](router.params)}
                </o-appear>
              )
            }}
            fallback={fallback}
            beforePending={async (suspense: Component) => {
              suspense.shadowRoot?.firstElementChild?.classList.add('opacity-0', 'translate-y-4')
              return new Promise((resolve) => setTimeout(resolve, 300))
            }}
            pending={pending}
            onLoaded={() => {
              window.refreshDark()
            }}
          ></o-suspense>
        </SiteLayout>
      )
    },
  }
}

function createComponentRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <ComponentLayout current={router.currentRoute?.path}>
          <o-suspense
            minLoadingTime={400}
            imports={[componentImport()]}
            customRender={(results: { [x: string]: Function }[]) => {
              const Module = results[0][Object.keys(results[0])[0]]
              return (
                <o-appear
                  class="opacity-0 translate-y-4"
                  onReady={() => {
                    window.refreshDark()
                    window.scrollTo(0, 0)
                  }}
                >
                  {isClassOrFunction(Module) === 'Function' ? Module(router.params) : <Module></Module>}
                </o-appear>
              )
            }}
            fallback={fallback}
            beforePending={async (suspense: Component) => {
              suspense.shadowRoot?.firstElementChild?.classList.add('opacity-0', 'translate-y-4')
              return new Promise((resolve) => setTimeout(resolve, 300))
            }}
            pending={pending}
            onLoaded={() => {
              window.refreshDark()
            }}
          ></o-suspense>
        </ComponentLayout>
      )
    },
  }
}

function createAdminRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <AdminLayout current={router.currentRoute?.path}>
          <o-suspense
            minLoadingTime={400}
            imports={[componentImport()]}
            customRender={(results: { [x: string]: Function }[]) => {
              const Module = results[0][Object.keys(results[0])[0]]
              return (
                <o-appear
                  class="opacity-0 translate-y-4"
                  onReady={() => {
                    window.refreshDark()
                    window.scrollTo(0, 0)
                  }}
                >
                  {isClassOrFunction(Module) === 'Function' ? Module(router.params) : <Module></Module>}
                </o-appear>
              )
            }}
            fallback={fallback}
            beforePending={async (suspense: Component) => {
              suspense.shadowRoot?.firstElementChild?.classList.add('opacity-0', 'translate-y-4')
              return new Promise((resolve) => setTimeout(resolve, 300))
            }}
            pending={pending}
            onLoaded={() => {
              window.refreshDark()
            }}
          >
          </o-suspense>
        </AdminLayout>
      )
    },
  }
}

function createBaseRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <o-suspense
          minLoadingTime={400}
          imports={[componentImport()]}
          customRender={(results: { [x: string]: Function }[]) => {
            return (
              <o-appear
                class="opacity-0 translate-y-4"
                onReady={() => {
                  window.refreshDark()
                  window.scrollTo(0, 0)
                }}
              >
                {results[0][Object.keys(results[0])[0]](router.params)}
              </o-appear>
            )
          }}
          fallback={fallback}
          pending={pending}
          onLoaded={() => {
            window.refreshDark()
          }}
        ></o-suspense>
      )
    },
  }
}

function createDocsRoute(path: string, componentImport: () => Promise<unknown>) {
  return {
    path,
    render(router: Router) {
      return (
        <SiteLayout current={router.currentRoute?.path}>
          <o-suspense
            minLoadingTime={400}
            imports={[componentImport(), import(`./docs/${router.params.lang}/${router.params.section}.md?raw`)]}
            customRender={(results: { [x: string]: Function }[]) => {
              return (
                <o-appear
                  class="opacity-0 translate-y-4"
                  onReady={() => {
                    window.refreshDark()
                    window.scrollTo(0, 0)
                  }}
                >
                  <product-docs
                    markdownContent={results[1].default}
                    lang={router.params.lang}
                    section={router.params.section}
                  ></product-docs>
                </o-appear>
              )
            }}
            fallback={fallback}
            beforePending={async (suspense: Component) => {
              suspense.shadowRoot?.firstElementChild?.classList.add('opacity-0', 'translate-y-4')
              return new Promise((resolve) => setTimeout(resolve, 300))
            }}
            pending={pending}
            onLoaded={() => {
              window.refreshDark()
            }}
          ></o-suspense>
        </SiteLayout>
      )
    },
  }
}

function isClassOrFunction(obj: any) {
  if (typeof obj !== 'function') {
    return 'Not a function or class'
  }

  if (obj.prototype && obj.prototype.constructor === obj) {
    if (obj.toString().startsWith('class ')) {
      return 'Class'
    } else {
      return 'Function'
    }
  }
  return 'Not a function or class'
}
