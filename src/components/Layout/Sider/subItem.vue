<template>
  <template v-if="props.childRoutes.children.length === 1">
    <el-menu-item
      :index="item.path"
      v-for="item in props.childRoutes.children"
      :key="item.path"
    >
      <div :class="item.meta.icon" class="nav-icon" v-if="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>

  <template v-else>
    <el-sub-menu :index="props.childRoutes.path">
      <template #title>
        <div
          :class="props.childRoutes.meta.icon"
          class="nav-icon"
          v-if="props.childRoutes.meta.icon"
        />
        <span>{{ props.childRoutes.meta.title }}</span>
      </template>
      <el-menu-item
        :index="item.path"
        v-for="item in props.childRoutes.children"
        :key="item.path"
      >
        <div :class="item.meta.icon" class="nav-icon" v-if="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </el-sub-menu>
  </template>
</template>

<script setup>
const props = defineProps({
  childRoutes: {
    type: Object,
    default: () => {},
  },

})
  console.log(props.childRoutes);

</script>

<style lang="scss" scoped>
.nav-icon {
  min-width: 22px;
  padding-right: 10px;
}
</style>
