/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 01:16:47
 * @LastEditTime: 2025-06-23 22:59:48
 * @LastEditors: 吴华彬
 * @Note: 
 */
import { routes } from './routes'
import { Router } from 'omi-router'
import './tailwind/index'

const router = new Router({
  routes,
  renderTo: '#app',
})

router.afterEach(() => {
  window.refreshDark()
})

export {router}