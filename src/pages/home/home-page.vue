<template>
  <div>
    <n-space>
      <n-button class="mr-12">Default</n-button>
      <n-button type="tertiary">Tertiary</n-button>
      <n-button type="primary">Primary</n-button>
      <n-button type="info">Info</n-button>
      <n-button type="success">Success</n-button>
      <n-button type="warning">Warning</n-button>
      <n-button type="error">Error</n-button>
    </n-space>
    <n-icon size="40">
      <Accessibility />
    </n-icon>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import { Accessibility } from '@vicons/ionicons5'
</script>

<style lang="" scoped></style>
