<template>
  <div class="home">
    <!-- <div class="header">
      <div class="left"></div>
      <div class="right">
        <button class="i-mdi:toolbox-outline svg" @click="toTools()"></button>
      </div>
    </div> -->
    <div class="home_main">
      <div class="time">
        <p>
          <!-- {{ data.time ? data.time.toLocaleString() : '00:00:00' }} -->
          KTB Search Page
        </p>
      </div>
      <div class="search">
        <div class="i-mdi:magnify inner-search"></div>
        <input
          placeholder="Search what you want"
          @keyup.enter="handleSearch()"
          v-model="data.searchWord"
        />
        <div class="i-mdi:close inner-close" @click="handleClearWord()"></div>
      </div>
      <SearchEngine :list="data.searchEngineList" />
      <div class="tool_box">
        <Favorite />
        <div class="player_weather">
          <div class="item">
            <Weather />
          </div>
          <div class="item">
            <Player />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue'
import { timer } from '@/utils/tools'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import api from '@/api/tools'
import SearchEngine from './components/SearchEngine.vue'
import Favorite from './components/Favorite.vue'
import Weather from './components/Weather.vue'
import Player from './components/Player.vue'

const store = useStore()
const router = useRouter()
const data = reactive({
  time: '',
  searchWord: '',
  searchEngineList: [
    { name: 'Google', icon: 'i-ant-design:google-outlined' },
    { name: 'Github', icon: 'i-ant-design:github-outlined' },
    { name: 'Bing', icon: 'i-cib:bing' },
    { name: 'StackOverflow', icon: 'i-academicons:stackoverflow' },
    { name: 'Baidu', icon: 'i-bxl:baidu' },
  ],
  searchUrl: computed(() => store.state.app.searchUrl),
})

setInterval(() => {
  data.time = timer()
}, 1000)

const handleSearch = () => {
  if (data.searchWord) {
    window.open(data.searchUrl + data.searchWord)
  }
}

const handleClearWord = () => {
  data.searchWord = ''
}

const toTools = () => {
  router.push('/tools')
}

onMounted(() => {
  store.dispatch('app/setSearchUrl')
  api.getCategory().then((res) => {
    console.log(res)
  })
})

// console.log(timer());
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;

  .home_main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    color: var(--c-text-color);
  }

  .time {
    font-family: 'Google Sans English';
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    p {
      font-size: 4.2rem;
      margin: 0;
    }
  }

  .search {
    position: relative;

    .inner-search,
    .inner-close {
      position: absolute;
      height: 100%;
      width: 1.4em;
      margin: 0 20px;
      z-index: 1;
    }

    .inner-close {
      right: 0;
      top: 0;
      cursor: pointer;
    }

    input {
      width: calc(100% - 100px);
      height: 46px;
      border: 1px solid transparent;
      border-radius: 30px;
      padding-inline-start: 50px;
      padding-inline-end: 50px;
      font-size: 1.1rem;
      font-family: 'Google Sans English';
      background-color: var(--c-home-bg-color-2);
      backdrop-filter: blur(5px);
      color: #fff;

      &:focus-visible {
        outline: none;
      }

      &:hover {
        box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
          0px 0px 6px 0 var(--c-text-color);
        border: 1px solid var(--c-border-color-6);
        transition: ease-in-out 0.2s;
      }
    }

    ::-webkit-input-placeholder {
      color: var(--c-text-color);
    }
  }
  .tool_box {
    display: flex;
    margin-top: 30px;

    .player_weather {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      margin-left: 20px;
      .item {
        background-color: var(--c-home-bg-color-2);
        backdrop-filter: blur(5px);
        height: 90px;
        width: 100%;
        padding: 10px 0;
        margin: 10px 0;
        border-radius: 14px;
        position: relative;
        overflow: hidden;
      }
    }
  }
}
</style>
