<template>
  <div class="documents">
    <div class="documents_item" v-for="item in itemList" :key="item.title">
      <div class="item_top">
        <img :src="item.icon" class="svg" />
        <span>{{ item.title }}</span>
      </div>
      <span class="description">{{ item.description }}</span>
    </div>
  </div>
</template>

<script setup>
const itemList = [
  {
    icon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
    title: 'MDN Web Docs',
    description:
      'MDN Web Docs 是一个提供 Web 技术和促进 Web 技术软件的不断发展的学习平台',
    url: 'https://developer.mozilla.org/zh-CN/',
  },
]
</script>

<style lang="scss" scoped>
.documents {
  display: flex;
  align-items: center;
  font-family: 'Google Sans English';

  .documents_item {
    height: 100%;
    width: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 14px;
    color: #fff;
    padding: 12px;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
      box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
        0px 0px 6px 0 var(--c-text-color);
      border: 1px solid var(--c-border-color-6);
      transition: ease-in-out 0.2s;
    }

    .item_top {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
      }
    }

    .svg {
      margin-right: 10px;
    }

    .description {
      font-size: 0.8em;
    }
  }
}
</style>
