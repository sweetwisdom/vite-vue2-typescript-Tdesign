<template>
  <t-button type="info">
    <slot />
  </t-button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ButtonTwo',
})
</script>
