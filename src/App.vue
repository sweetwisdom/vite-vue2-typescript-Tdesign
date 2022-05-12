<!--
 * @Author: zhangchao
 * @Date: 2022-05-12 11:59:50
 * @LastEditors: zhangchao
 * @LastEditTime: 2022-05-12 12:04:24
 * @Description: file content
-->
<template>
  <div id="app">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'App',
})
</script>
