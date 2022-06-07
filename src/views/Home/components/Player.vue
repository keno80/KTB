<template>
  <div class="player_box">
    <div class="album"></div>
    <div class="player">
      <div class="song">
        <p>Song Name</p>
        <span>artist</span>
      </div>
      <div class="divider" />
      <div class="controll">
        <div class="i-mdi:skip-previous icon"></div>
        <div class="i-mdi:motion-play-outline icon"></div>
        <div class="i-mdi:skip-next icon"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import api from '@/api/music'

const store = useStore()

const data = reactive({
  trackIDs: computed(() => store.state.music.trackIDList),
  index: computed(() => store.state.music.index),
})

// 获取排行榜
const getToplist = () => {
  api.getToplist().then((res) => {
    const id = res.data.list[3].id
    getPlaylistDetail(id)
  })
}

// 获取歌单详情
const getPlaylistDetail = (id) => {
  api.getPlaylistDetail(id).then((res) => {
    const trackIDList = res.data.playlist.trackIds
    store.dispatch('music/setTracksIDist', trackIDList)
    getSongDetail()
  })
}

// 获取歌曲详情
const getSongDetail = () => {
  console.log(data.trackIDs[data.index])
  // api.getSongDetail().then(res => {

  // })
}

onMounted(() => {
  getToplist()
})
</script>

<style lang="scss" scoped>
.player_box {
  padding: 0 10px;
  display: flex;
  font-family: 'Google Sans English';

  .album {
    width: 90px;
    height: 90px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }

  .player {
    margin-left: 10px;
    flex: auto;

    p {
      margin: 0 0;
      padding-left: 4px;
    }

    span {
      padding-left: 4px;
      color: #e6e6e6;
    }

    .divider {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      margin: 10px 0;
    }

    .controll {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon {
        width: 1.8em;
        height: 1.8em;
      }
    }
  }
}
</style>
