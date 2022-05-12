<!--
 * @Author: zhangchao
 * @Date: 2022-05-11 18:37:45
 * @LastEditors: zhangchao
 * @LastEditTime: 2022-05-12 12:43:47
 * @Description: file content
-->
<template>
  <div>
    <t-head-menu theme="light" v-model="menu1Value" @change="changeHandler">
      <template #logo>
        <img
          width="136"
          src="https://www.tencent.com/img/index/menu_logo_hover.png"
          alt="logo"
        />
      </template>
      <t-menu-item value="item1">菜单1</t-menu-item>
      <t-menu-item value="item2">菜单2</t-menu-item>

      <template #operations>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="search" /></a>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="mail" /></a>
        <a href="javascript:;"
          ><icon class="t-menu__operations-icon" name="logo-apple-filled"
        /></a>
        <a href="javascript:;"
          ><icon class="t-menu__operations-icon" name="ellipsis"
        /></a>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu1Value: 'item2',
      menu2Value: 'item1',
    }
  },

  props: {},
  watch: {},
  mounted() {},
  created() {},

  methods: {
    changeHandler(active) {
      console.log('change', active)
    },
  },
}
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
