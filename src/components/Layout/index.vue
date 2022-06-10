<template>
  <div class="layout">
    <div class="right">
      <Header />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './Header/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;

  .right {
    height: 100%;
    width: 100%;

    .content {
      padding: 20px;
      height: calc(100% - 100px);
    }
  }
}
</style>
