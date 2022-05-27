<template>
  <div class="layout">
    <div class="left">
      <div class="logo" />
      <Sider style="height: calc(100% - 50px)" />
    </div>
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
  .left {
    width: 210px;
    height: 100%;
    float: left;

    .logo {
      height: 50px;
      background-color: var(--c-bg-color);
      width: 209px;
      border-right: 1px solid var(--el-menu-border-color);
    }
  }

  .right {
    width: calc(100% - 210px);
    height: 100%;
    margin-left: 210px;
    
    .content {
      padding: 20px;
    }
  }
}
</style>
