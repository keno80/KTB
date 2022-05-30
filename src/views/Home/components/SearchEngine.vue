<template>
  <div class="search_engine">
    <div
    :class="[item === searchEngine ? 'active' : '']"
      class="search_engine_item"
      v-for="item in props.list"
      :key="item"
      @click="chooseEngine(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchEngine = computed(() => store.state.app.searchEngine)

const props = defineProps({
  list: {
    type: Array,
    default: () => ['Google', 'Github', 'Bing', 'StackOverflow', 'Baidu'],
  },
})

const chooseEngine = (item) => {
  store.dispatch('app/setSearchEngine', item)
  store.dispatch('app/setSearchUrl')
}
</script>

<style lang="scss" scoped>
.search_engine {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-family: 'Google Sans English';

  .search_engine_item {
    background-color: var(--c-home-bg-color-2);
    backdrop-filter: blur(10px);
    padding: 10px 30px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.05em;
    border: 1px solid transparent;

  }

  .active {
    box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
      0px 0px 6px 0 var(--c-text-color);
    border: 1px solid var(--c-border-color-6);
  }
}
</style>
