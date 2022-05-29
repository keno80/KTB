<template>
  <div class="layout">
    <!-- <div class="left">
      <div class="logo" />
      <Sider style="height: calc(100% - 50px)" />
    </div> -->
    <div class="right">
      <Header />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sider from './Sider/index.vue'
import Header from './Header/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  .left {
    height: 100%;
    flex: 1;

    .logo {
      height: 50px;
      background-color: var(--c-bg-color);
      border-right: 1px solid var(--el-menu-border-color);
    }
  }

  .right {
    height: 100%;
    width: 100%;
    flex: auto;
    
    .content {
      padding: 20px;
      height: calc(100% - 100px);
    }
  }
}
</style>
