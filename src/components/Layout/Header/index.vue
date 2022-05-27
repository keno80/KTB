<template>
  <div class="header">
    <div class="left">
      <button class="i-ep-fold svg"></button>
    </div>
    <div class="right">
      <button
        class="i-charm-sun dark:i-charm-moon svg"
        @click="toggleDark()"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { toggleDark } from '@/composables'
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  border-bottom: 1px solid var(--el-menu-border-color);
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .svg {
    height: 1.5em;
    width: 1.5em;
    cursor: pointer;
  }
}
</style>
