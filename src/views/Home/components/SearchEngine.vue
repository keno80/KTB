<template>
  <div class="search_engine">
    <div
      :class="[item.name === searchEngine ? 'active' : '']"
      class="search_engine_item"
      v-for="item in props.list"
      :key="item.name"
      @click="chooseEngine(item.name)"
    >
      <div :class="item.icon" class="engine-icon"></div>
      <span>{{ item.name }}</span>
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
    default: () => [],
  },
})

const chooseEngine = (name) => {
  store.dispatch('app/setSearchEngine', name)
  store.dispatch('app/setSearchUrl')
}
</script>

<style lang="scss" scoped>
.search_engine {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-family: 'Google Sans English';

  .search_engine_item {
    background-color: var(--c-home-bg-color-2);
    backdrop-filter: blur(5px);
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.05em;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-content: center;

    &:hover {
      box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
        0px 0px 6px 0 var(--c-text-color);
      border: 1px solid var(--c-border-color-6);
      transition: ease-in-out .2s;
    }

    .engine-icon {
      margin-right: 8px;
      height: 1.2em;
      width: 1.2em;
    }
  }

  .active {
    box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
      0px 0px 6px 0 var(--c-text-color);
    border: 1px solid var(--c-border-color-6);
  }
}
</style>
