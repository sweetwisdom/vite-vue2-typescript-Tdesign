<template>
  <t-button type="primary">
    <slot />
  </t-button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ButtonOne',
  setup() {},
})
</script>
