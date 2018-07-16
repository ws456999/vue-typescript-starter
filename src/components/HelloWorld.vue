<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>vue-typescrip-starter</h2>
    <p>mixin 数据 ：{{ testMixinArg }}</p>
    <p>store 数据 ：{{ info.data }}</p>
    <RC></RC>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RC from '@/components/renderComponent.vue'
import TestMixin from '../mixins/test-mixin'
import { Getter } from 'vuex-class'

@Component({
  components: {
    RC
  },
  mixins: [TestMixin]
})
export default class HelloWorld extends Vue<TestMixin> {
  @Getter info

  msg: string = 'Welcome to Your Vue-Typescript App'

  mounted () {
    console.log(this.testMixinArg)
    console.log('这是 _.assign({})', _.assign({}))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
