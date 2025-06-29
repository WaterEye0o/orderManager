/*
 * @Author: 吴华彬
 * @Date: 2025-06-21 01:16:47
 * @LastEditTime: 2025-06-23 23:42:27
 * @LastEditors: 吴华彬
 * @Note: 
 */
import { isDark } from '../store.ts'
import '../components/button/index.tsx'
import { getToken } from '../net/service.ts'
import moment from 'moment'
import { Router } from 'omi-router'
import { router } from '../main.tsx'
import { setToken } from '../net/net.ts'
export function Login () {
  return (
    <div
      class="bg-background"
      style={{
        backgroundSize: '150%',
        backgroundPosition: 'center',
        backgroundImage: `url('https://static.tdesign.tencent.com/starter/vue/assets/assets-login-bg-${isDark.value ? 'black-ff89ae69' : 'white-439b0654'
          }.png')`,
      }}
    >
      <div class="min-h-screen flex items-center justify-center">
        <div class="bg-background text-foreground shadow-lg border p-8 rounded-lg w-full max-w-md fixed bottom-48 left-10">
          <h1 class="font-semibold text-2xl mb-2">登录到</h1>
          <h1 class="font-semibold text-2xl mb-6">OMI Templates</h1>

          <form>
            <div class="mb-4">
              <label for="username" class="sr-only">
                账号
              </label>
              <input
                type="text"
                id="username"
                placeholder="请输入账号：admin"
                class="w-full px-4 py-2 border border-zinc-300 rounded focus:outline-none focus:border-primary"
              />
            </div>
            <div class="mb-4">
              <label for="password" class="sr-only">
                密码
              </label>
              <input
                type="password"
                id="password"
                placeholder="请输入登录密码：admin"
                class="w-full px-4 py-2 border border-zinc-300 rounded focus:outline-none focus:border-primary"
              />
            </div>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center">
                <input type="checkbox" id="remember" class="mr-2" />
                <label for="remember" class="text-sm">
                  记住账号
                </label>
              </div>
              <a href="#" class="text-sm text-primary dark:brightness-150">
                忘记账号？
              </a>
            </div>
            <o-button onClick={async () => {
              const res = await getToken({
                "client_id": "snd",
                "client_secret": "Snd@202506181800",
                "username": "DHL",
                "accountId": "2239992719369835520",
                "nonce": "417",
                // "timestamp": "2025-06-23 21:12:52",
                "timestamp": moment().format('YYYY-MM-DD HH:mm:ss'),
                "language": "zh_CN"
              })
              if (res?.data?.access_token) {
                setToken(res?.data?.access_token)
                router.push('/product/list')
              }
            }} theme="primary" className="block w-full" cls="w-full"
            //  type="submit"
            // href="#/product/list" 
            // tag="a"
            >
              登录
            </o-button>
          </form>

          <div class="mt-6 flex items-center justify-center">
            <span class="text-sm ">使用微信扫码登录</span>
            <span class="text-sm text-primary ml-2 dark:brightness-150">使用手机号登录</span>
          </div>
        </div>
      </div>
      <footer class="text-center mt-8 fixed bottom-32 left-20">
        <p class="text-sm text-zinc-400 dark:text-zinc-500">Copyright @ 2024-2025 Tencent. All Rights Reserved</p>
      </footer>
    </div>
  )
}
