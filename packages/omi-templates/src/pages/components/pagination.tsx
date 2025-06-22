/*
 * @Author: 吴华彬
 * @Date: 2025-06-23 01:08:01
 * @LastEditTime: 2025-06-23 01:12:04
 * @LastEditors: 吴华彬
 * @Note: 
 */

import { Component, tag } from 'omi';

@tag('o-pagination')
export class Pagination extends Component{
    render(){
        return <div class='justify-self-center'>

      <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
              <li>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  前一页
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  1
                </a>
              </li>
              <li aria-current="page">
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  下一页
                </a>
              </li>
            </ul>
          </nav>
        </div>
    }
}