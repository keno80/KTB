<template>
  <div class="favorite">
    <div
      class="favorite_item"
      v-for="(item, index) in favoriteList"
      :key="index"
      @click="handleClick(item.url)"
    >
      <div>
        <!-- <div class="i-mdi:close close" @click.stop="handleShowModal"></div> -->
        <div :class="item.icon" class="icon"></div>
        <div class="item_name">{{ item.name }}</div>
      </div>
    </div>

    <!-- <CloseModal @confirm="confirm" v-if="showModal" /> -->
  </div>
</template>

<script setup>
import CloseModal from '@/components/CloseModal/index.vue'
import { ref } from 'vue'

const showModal = ref(false)

const handleShowModal = () => {
  showModal.value = true
}

const confirm = () => {
  showModal.value = false
}

const favoriteList = [
  {
    name: 'Translate',
    icon: 'i-mdi:google-translate',
    url: 'https://translate.google.cn',
  },
  {
    name: 'Bilibili',
    icon: 'i-ri:bilibili-line',
    url: 'https://www.bilibili.com/',
  },
  {
    name: 'Github',
    icon: 'i-ant-design:github-outlined',
    url: 'https://github.com/',
  },
  {
    name: 'MDN',
    icon: 'i-simple-icons:mdnwebdocs',
    url: 'https://developer.mozilla.org/zh-CN/',
  },
  { name: 'Vue', icon: 'i-mdi:vuejs', url: 'https://v3.cn.vuejs.org/' },
  {
    name: 'Element Plus',
    icon: 'i-ep:element-plus',
    url: 'https://element-plus.org/zh-CN/#/zh-CN',
  },
  {
    name: 'Ant Design',
    icon: 'i-ant-design:ant-design-outlined',
    url: 'https://www.antdv.com/docs/vue/introduce-cn/',
  },
  { name: 'Vite', icon: 'i-simple-icons:vite', url: 'https://cn.vitejs.dev/' },
  { name: 'Nuxt.js', icon: 'i-mdi:nuxt', url: 'https://www.nuxtjs.cn/' },
  {
    name: 'Lodash',
    icon: 'i-simple-icons:lodash',
    url: 'https://www.lodashjs.com/',
  },
  {
    name: 'Echarts',
    icon: 'i-simple-icons:apacheecharts',
    url: 'https://echarts.apache.org/zh/index.html',
  },
  {
    name: 'Bootstrap',
    icon: 'i-mdi:bootstrap',
    url: 'https://www.bootcss.com/',
  },
]

const handleClick = (url) => {
  window.open(url)
}
</script>

<style lang="scss" scoped>
.favorite {
  // background-color: var(--c-home-bg-color-2);
  // backdrop-filter: blur(5px);
  border-radius: 14px;
  // padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: 'Google Sans Regular';

  &::after {
    content: '';
    width: 120px;
  }

  .favorite_item {
    background-color: var(--c-home-bg-color-2);
    backdrop-filter: blur(5px);
    border-radius: 14px;
    width: 120px;
    height: 90px;
    margin: 8px 0;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 12px 0 8px;
    cursor: pointer;
    position: relative;

    &:hover {
      box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
        0px 0px 6px 0 var(--c-text-color);
      border: 1px solid var(--c-border-color-6);
      transition: ease-in-out 0.2s;
    }

    // &:hover .close {
    //   display: block;
    // }

    // .close {
    //   position: absolute;
    //   top: 8px;
    //   right: 8px;
    //   width: 1.3em;
    //   height: 1.3em;
    //   cursor: pointer;
    //   display: none;
    // }

    .icon {
      width: 100%;
      height: 2em;
      margin-bottom: 10px;
    }
  }
}
</style>
