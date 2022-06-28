<template>
  <div class="tools">
    <div class="tools_content">
      <div class="left">
        <div
          class="item"
          v-for="item in nav"
          :key="item.name"
          @click="chooseCategory(item)"
          :class="{ item_active: item.index === currentCategory }"
        >
          <button :class="item.icon" class="svg"></button>
          <span class="item_text">{{ item.name }}</span>
        </div>
      </div>
      <div class="documents">
        <div
          class="documents_item"
          v-for="item in list[currentCategory].items"
          :key="item.title"
        >
          <div class="item_top">
            <img :src="item.icon" class="svg" />
            <span>{{ item.title }}</span>
          </div>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { list } from '@/utils/items'
import { ref } from 'vue'
const nav = [
  {
    name: '技术文档',
    index: 0,
    icon: 'i-mdi:file-document',
  },
  {
    name: 'UI 框架',
    index: 1,
    icon: 'i-mdi:palette',
  },
  {
    name: '前端插件',
    index: 2,
    icon: 'i-mdi:toy-brick',
  },
]

const currentCategory = ref(0)

const chooseCategory = (item) => {
  currentCategory.value = item.index
}
</script>

<style lang="scss" scoped>
.tools {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  .tools_content {
    display: flex;
    width: 1300px;
  }
}

.left {
  .item {
    border-radius: 14px;
    padding: 8px 18px;
    margin: 0 20px 18px 0;
    background-color: var(--c-home-bg-color-2);
    border: 1px solid transparent;
    cursor: pointer;
    width: 120px;

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

    .svg {
      cursor: pointer;
      color: #fff;
    }
  }

  .item_active {
    box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
      0px 0px 6px 0 var(--c-text-color);
    border: 1px solid var(--c-border-color-6);
  }
}
.documents {
  display: flex;
  font-family: 'Google Sans English';
  justify-content: space-between;
  flex-wrap: wrap;

  .documents_item {
    height: 84px;
    width: 186px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 14px;
    color: #fff;
    padding: 12px;
    cursor: pointer;
    border: 1px solid transparent;
    margin-bottom: 18px;

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
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      word-break: break-words;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }
  }
}
</style>
