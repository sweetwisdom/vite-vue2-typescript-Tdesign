<!--
 * @Author: zhangchao
 * @Date: 2022-05-11 18:37:45
 * @LastEditors: zhangchao
 * @LastEditTime: 2023-06-29 17:56:11
 * @Description: file content
-->
<template>
  <div>
    <t-head-menu theme="light" v-model="activeIndex" @change="handleSelect">
      <template #logo>
        <img
          width="136"
          src="https://www.tencent.com/img/index/menu_logo_hover.png"
          alt="logo"
        />
      </template>
      <t-menu-item value="0"> home </t-menu-item>
      <t-menu-item value="1"> about </t-menu-item>
      <t-menu-item value="2"> news </t-menu-item>

      <template #operations>
        <a href="javascript:;"
          ><t-icon class="t-menu__operations-icon" name="search"
        /></a>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="mail" /></a>
        <a href="javascript:;"
          ><t-icon class="t-menu__operations-icon" name="logo-apple-filled"
        /></a>
        <a href="javascript:;"
          ><t-icon class="t-menu__operations-icon" name="ellipsis"
        /></a>
      </template>
    </t-head-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'
export default defineComponent({
  setup() {
    const route = useRouter()
    const activeIndex = ref('0')

    const handleSelect = (key: string) => {
      console.log(key)

      console.log(activeIndex.value)

      const routes = ['/', '/about', '/news/1']
      activeIndex.value = key
      const idx = Number(key)
      const path = routes[idx]
      route.push(path)
    }
    return { activeIndex, handleSelect }
  },
})
</script>


<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  overflow: auto;
}
</style>