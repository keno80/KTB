<template>
  <div class="widgets_main">
    <div class="widgets_header">
      <div
        class="widgets_header_item"
        v-for="item in headerItem"
        :key="item.id"
        :class="{ active: item.id === data.nowActive }"
        @click="handleChangeActive(item.id)"
      >
        <div :class="item.icon" class="icon" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="widgets_body"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const headerItem = [
  {
    id: 1,
    name: '书签页',
    icon: 'i-mdi:bookmark',
  },
  {
    id: 2,
    name: '小组件',
    icon: 'i-mdi:widgets',
  },
  {
    id: 3,
    name: '设置',
    icon: 'i-mdi:settings',
  },
]

const data = reactive({
  nowActive: 1,
})

const handleChangeActive = (id) => {
  data.nowActive = id
}
</script>

<style lang="scss" scoped>
.widgets_main {
  position: absolute;
  right: 0;
  top: 40px;
  width: 400px;
  color: #fff;
  font-family: 'Google Sans English';
}

.widgets_header {
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  justify-content: space-between;
  position: relative;

  .widgets_header_item {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 0.9em;
    cursor: pointer;
    position: relative;
    width: 94px;
    text-align: center;

    .icon {
      display: inline-block;
      vertical-align: -4px;
      margin-right: 5px;
      height: 1.3em;
      width: 1.3em;
    }
  }

  .active {
    background: rgba(255, 255, 255, 0.3);
    transition: all ease-in-out .3s;
  }
}

.widgets_body {
  background: rgba(255, 255, 255, 0.2);
  height: 740px;
  border-radius: 14px;
  margin-top: 20px;
}
</style>
