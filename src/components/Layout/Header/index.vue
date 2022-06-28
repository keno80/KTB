<template>
  <div class="header">
    <div class="left">
    </div>
    <div class="right">
      <div class="item" v-if="mode === 'tools'" @click="toHome">
        <button class="i-mdi:home svg"></button>
      </div>
      <div class="item" v-else @click="toTools">
        <button class="i-mdi:shape svg"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import { toggleDark } from '@/composables'

const router = useRouter()
const store = useStore()

const isCollapse = computed(() => store.state.app.isCollapse)
const mode = computed(() => store.state.app.mode)

const toggleSideCollapse = () => {
  isCollapse.value
    ? store.commit('app/toggleSideCollapse', false)
    : store.commit('app/toggleSideCollapse', true)
}

const toHome = () => {
  router.push('/')
  store.dispatch('app/setMode', 'home')
}

const toTools = () => {
  router.push('/tools')
  store.dispatch('app/setMode', 'tools')
}
</script>

<style lang="scss" scoped>
.header {
  height: 58px;
  // border-bottom: 1px solid var(--el-menu-border-color);
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  font-family: 'Google Sans English';

  .left_item,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    .item {
      padding: 8px;
      background-color: var(--c-home-bg-color-2);
      border-radius: 50%;
      margin-left: 8px;
      border: 1px solid transparent;
      cursor: pointer;

      span {
        color: #fff;
        margin-left: 6px;
      }

      &:hover {
        box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
          0px 0px 6px 0 var(--c-text-color);
        border: 1px solid var(--c-border-color-6);
        transition: ease-in-out 0.2s;
      }
    }
  }

  .svg {
    cursor: pointer;
    color: #fff;
  }
}
</style>
