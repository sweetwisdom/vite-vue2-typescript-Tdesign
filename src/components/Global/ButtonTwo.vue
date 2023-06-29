<!--
 * @Author: zhangchao
 * @Date: 2023-06-28 21:36:49
 * @LastEditors: zhangchao
 * @LastEditTime: 2023-06-29 17:40:51
 * @Description: file content
-->
<template>
  <t-button type="info">
    <slot />
  </t-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonTwo',
})
</script>
