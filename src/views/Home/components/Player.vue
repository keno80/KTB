<template>
  <div class="player_box">
    <div class="album">
      <img :src="data.nowPlaying.al.picUrl" v-if="data.nowPlaying.al" />
    </div>
    <div class="player">
      <div class="song">
        <p>
          {{ data.nowPlaying.al ? data.nowPlaying.al.name : 'Song Name' }}
        </p>
        <span>
          {{ data.nowPlaying.artists ? data.nowPlaying.artists : 'Artists' }}
        </span>
      </div>
      <div class="divider" />
      <div class="controll">
        <div class="i-mdi:skip-previous icon" @click="switchSongs(0)"></div>
        <div
          class="i-mdi:motion-play-outline icon"
          @click="play()"
          v-if="data.paused"
        ></div>
        <div
          class="i-mdi:motion-pause-outline icon"
          @click="pause()"
          v-else
        ></div>

        <div class="i-mdi:skip-next icon" @click="switchSongs(1)"></div>
      </div>
    </div>
    <audio ref="audio" autoplay :src="data.audioSrc" />
  </div>
</template>

<script setup>
import { onMounted, computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import api from '@/api/music'

const store = useStore()
const audio = ref()

const data = reactive({
  tracks: computed(() => store.state.music.tracksList),
  index: computed(() => store.state.music.index),
  audioSrc: '',
  nowPlaying: {},
  paused: true,
})

// 播放
const play = () => {
  if (data.tracks.length === 0) {
    getToplist()
  } else {
    data.paused = false
    audio.value.play()
  }
}

// 暂停
const pause = () => {
  audio.value.pause()
  data.paused = true
}

// 获取排行榜
const getToplist = () => {
  api.getToplist().then((res) => {
    const id = res.data.list[3].id
    getPlaylistDetail(id)
  })
}

// 上一曲下一曲
const switchSongs = (type) => {
  if (data.tracks.length !== 0) {
    switch (type) {
      case 0:
        // 如果当前为第一首则播放最后一首,如果不是,则播放上一首
        data.index === 0
          ? store.dispatch('music/setIndex', data.tracks.length - 1)
          : store.dispatch('music/setIndex', data.index - 1)
        break
      case 1:
        // 如果当前为最后一首则播放第一首,如果不是,则播放下一首
        data.index === data.tracks.length - 1
          ? store.dispatch('music/setIndex', 0)
          : store.dispatch('music/setIndex', data.index + 1)
        break
    }
    data.nowPlaying = data.tracks[data.index]
    data.nowPlaying.artists = data.nowPlaying.ar
      .map((item) => item.name)
      .join('/')
    getSongUrl(data.nowPlaying.id)
  }
}

// 获取歌单详情
const getPlaylistDetail = (id) => {
  api.getPlaylistDetail(id).then((res) => {
    const tracksList = res.data.playlist.tracks
    store.dispatch('music/setTracksList', tracksList)
    data.nowPlaying = data.tracks[data.index]
    data.nowPlaying.artists = data.nowPlaying.ar
      .map((item) => item.name)
      .join('/')
    getSongUrl(data.nowPlaying.id)
  })
}

// 获取歌曲Url
const getSongUrl = (id) => {
  api.getSongUrl(id).then((res) => {
    data.audioSrc = res.data.data[0].url
    setTimeout(() => {
      audio.value.play()
      data.paused = false
    }, 200)
  })
}

onMounted(() => {})
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

    img {
      width: inherit;
      height: inherit;
      border-radius: inherit;
    }
  }

  .player {
    margin-left: 10px;
    flex: auto;

    p {
      margin: 0 0;
      padding-left: 4px;
      font-size: 0.9em;
    }

    span {
      padding-left: 4px;
      color: #e6e6e6;
      font-size: 0.8em;
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
        cursor: pointer;
      }
    }
  }
}
</style>
