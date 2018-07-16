import { Vue, Component } from 'vue-property-decorator'

// declare module 'vue/types/vue' {
//   interface Vue {
//     testMixinArg: string
//     testMixinFunc (): void
//   }
// }

/**
 * Mixin test
 *
 * @export
 * @class TestMixin
 * @extends {Vue}
 */
@Component({})
export default class TestMixin extends Vue {
  testMixinArg: string = 'this is test mixin arg'

  testMixinFunc (): void {
    console.log('this string is from test mixin console.log')
  }
}
