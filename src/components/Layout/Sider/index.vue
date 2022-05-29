<template>
  <el-menu
    :default-active="data.currentRoute"
    :collapse="data.isCollapse"
    class="el-menu-vertical"
    :router="true"
  >
    <template v-for="item in data.allRoutes" :key="item.path">
      <SubItem :childRoutes="item" />
    </template>
  </el-menu>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import SubItem from './subItem.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const data = reactive({
  isCollapse: computed(() => store.state.app.isCollapse),
  allRoutes: computed(() => router.options.routes),
  currentRoute: computed(() => route.path),
})

</script>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}

.el-menu--collapse {
  ::v-deep(.nav-icon) {
    padding: 0;
  }
}
</style>
