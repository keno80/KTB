<template>
  <div class="header">
    <div class="left">
      <button class="i-ep-fold svg" @click="toggleExpand()" />
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
import { computed } from 'vue'
import { useStore } from 'vuex'
import { toggleDark } from '@/composables'

const store = useStore()
const expand = computed(() => store.state.app.sideExpand)

const toggleExpand = () => {
  expand.value
    ? store.commit('app/toggleSideExpand', false)
    : store.commit('app/toggleSideExpand', true)
}
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
