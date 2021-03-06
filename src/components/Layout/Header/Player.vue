<template>
  <div class="player_box">
    <div class="album">
      <img :src="data.nowPlaying.al.picUrl" v-if="data.nowPlaying.al" />
    </div>
    <div class="player">
      <div class="song">
        <span>
          {{ data.nowPlaying.name ? data.nowPlaying.name : 'Song Name' }} -
          {{ data.nowPlaying.artists ? data.nowPlaying.artists : 'Artists' }}
        </span>
      </div>
      <div class="progress_box">
        <div class="bottom_line" />
        <div class="progress_line" :style="{ width: data.progress + '%' }" />
      </div>
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
  progress: 0,
  volume: 0.5,
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
          ? store.dispatch('music/setIndex', Number(data.tracks.length) - 1)
          : store.dispatch('music/setIndex', Number(data.index) - 1)
        break
      case 1:
        // 如果当前为最后一首则播放第一首,如果不是,则播放下一首
        data.index === data.tracks.length - 1
          ? store.dispatch('music/setIndex', 0)
          : store.dispatch('music/setIndex', Number(data.index) + 1)
        break
    }
    artistsCommon()
  }
}

// 获取歌单详情
const getPlaylistDetail = (id) => {
  api.getPlaylistDetail(id).then((res) => {
    const tracksList = res.data.playlist.tracks
    store.dispatch('music/setTracksList', tracksList)
    artistsCommon()
  })
}

// 获取歌曲Url
const getSongUrl = (id) => {
  api.getSongUrl(id).then((res) => {
    data.audioSrc = res.data.data[0].url
    setTimeout(() => {
      audio.value.play()
      data.paused = false
      audioInit()
    }, 200)
  })
}

// 歌手名称处理
const artistsCommon = () => {
  data.nowPlaying = data.tracks[data.index]
  data.nowPlaying.artists = data.nowPlaying.ar
    .map((item) => item.name)
    .join('/')
  getSongUrl(data.nowPlaying.id)
}

// 添加事件监听器
const audioInit = () => {
  audio.value.addEventListener('timeupdate', () => {
    data.progress =
      (audio.value.currentTime / audio.value.duration).toFixed(2) * 100
  })

  audio.value.addEventListener('ended', () => {
    switchSongs(1)
  })
}

onMounted(() => {
  audio.value.volume = localStorage.volume ? localStorage.volume : data.volume
})
</script>

<style lang="scss" scoped>
.player_box {
  padding: 0 10px;
  display: flex;
  font-family: 'Google Sans Regular';
  // background-color: rgba(255, 255, 255, 0.2);

  .album {
    width: 50px;
    height: 50px;
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

    .song {
      width: 120px;
      padding-top: 3px;
    }

    p {
      margin: 0 0;
      padding-left: 4px;
      font-size: 0.9em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    span {
      padding-left: 4px;
      color: #fff;
      font-size: 0.8em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
    }

    .progress_box {
      position: relative;

      .bottom_line {
        position: absolute;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        top: 0;
        left: 4px;
        width: 100%;
      }

      .progress_line {
        position: absolute;
        top: 0;
        left: 4px;
        border-top: 1px solid rgba(255, 255, 255, 1);
      }
    }

    .controll {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2px;

      .icon {
        width: 1.6em;
        height: 1.6em;
        cursor: pointer;
        color: #fff;
      }
    }
  }
}
</style>
