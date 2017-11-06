import * as lodash from 'lodash'

declare module "*.vue" {
  import Vue from "vue"
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
