import * as lodash from 'lodash'
import Vue from 'vue'

declare module '*.vue' {
  export default Vue
}

// 全局变量设置
declare global {
  const _: typeof lodash
}

// iview 全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $Message: any,
    $Modal: any
  }
}
