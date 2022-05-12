<!--
 * @Author: zhangchao
 * @Date: 2022-05-12 11:59:50
 * @LastEditors: zhangchao
 * @LastEditTime: 2022-05-12 14:10:28
 * @Description: file content
-->
<template>
  <div class="m-10">
    <h1>Vite ⚡ - Vue2 - typescript starter template</h1>
    <p>
      This starter template will help you to easily create a Vue2 application bundled by
      the lightning fast build tool called Vite.
    </p>
    <p>
      <t-tag>typescript support</t-tag>
      <t-tag>auto routing</t-tag>
      <t-tag>auto store</t-tag>
      <t-tag>global component auto import</t-tag>
      <t-tag>commit lint</t-tag>
      <t-tag>vueuse</t-tag>
      and
      <t-tag>vue composition-api</t-tag> for Vue2.
    </p>
    <t-switch size="large" v-model="checked" :label="['开', '关']"></t-switch>
    <t-steps :current="1">
      <t-step-item title="步骤1" content="提示文字" />
      <t-step-item title="步骤2" content="提示文字" />
      <t-step-item title="步骤3" content="提示文字" />
    </t-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    }
  },
  props: {},
  watch: {},
  mounted() {},
  created() {},

  methods: {},
}
</script>

<style scoped></style>
