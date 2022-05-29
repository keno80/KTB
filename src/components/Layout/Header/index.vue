<template>
  <div class="header">
    <div class="left">
      <button
        :class="[isCollapse ? 'i-ep:expand' : 'i-ep:fold']"
        class="svg"
        @click="toggleSideCollapse()"
      />
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
const isCollapse = computed(() => store.state.app.isCollapse)

const toggleSideCollapse = () => {
  isCollapse.value
    ? store.commit('app/toggleSideCollapse', false)
    : store.commit('app/toggleSideCollapse', true)
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
    cursor: pointer;
  }
}
</style>
