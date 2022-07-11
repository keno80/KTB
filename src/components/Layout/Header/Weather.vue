<template>
  <div class="weather">
    <div :class="data.weather.icon" class="icon"></div>
    <div class="weather_info">
      <p class="temp">{{ data.weather.temp }}°</p>
      <p class="text">{{ data.weather.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'
import api from '@/api/tools'

const store = useStore()

const data = reactive({
  weather: computed(() => store.state.app.weather),
  city: localStorage.city ? localStorage.city : '', //  地理位置信息
  location: computed(() => store.state.app.currentLocation), // 经纬度信息
  refresh_now: false, // 立即刷新天气
})

const Qkey = 'f769a71457c54fe686bd0c8abf9d0174'
const Akey = 'e8d86b9947e646f6c6bd42388fa37753'
const cityInfoUrl = `https://geoapi.qweather.com/v2/city/lookup?key=${Qkey}&location=东坡&adm=四川`

// 获取天气信息
const fetchWeatherInfo = () => {
  // 判断是否是首次打开以及是否需要刷新
  if (!localStorage.update_time) {
    getLocation()
  } else {
    const _time = (Date.now() - localStorage.update_time) / 1000 / 60
    if (_time > 60) {
      getWeather()
    }
  }
}

// 获取当前区域地理位置信息
const getLocation = () => {
  // 调用高德地图API获取位置信息
  api.getAmapIp({ key: Akey }).then((res) => {
    if (res.data.status == 1) {
      api
        .getQweatherCity({ key: Qkey, location: res.data.adcode })
        .then((res) => {
          if (res.data.code === '200') {
            localStorage.city = res.data.location[0].adm2
            const location =
              res.data.location[0].lon + ',' + res.data.location[0].lat
            store.dispatch('app/setCurrentLocation', location)
            data.refresh_now = true
            getWeather()
          }
        })
    }
  })
}

const getWeather = () => {
  // 利用获取到的地理信息请求天气信息
  api.getQweather({ key: Qkey, location: data.location }).then((res) => {
    if (res.data.code === '200') {
      res.data.now.icon = `qi-${res.data.now.icon}`
      store.dispatch('app/setWeather', res.data.now)
      localStorage.weather = JSON.stringify(res.data.now)
      data.refresh_now = false
      // 获取/更新成功后记录当前的时间戳
      localStorage.update_time = Date.now()
    }
  })
}

onMounted(() => {
  fetchWeatherInfo()
})
</script>

<style lang="scss" scoped>
.weather {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Google Sans English';
  background-color: rgba(255, 255, 255, 0.2);
  padding: 8px;
  border-radius: 14px;

  .icon {
    width: 1.8em;
    height: 1.8em;
    margin-right: 10px;

    &::before {
      font-size: 1.6em;
    }
  }

  p {
    margin: 0;
  }

  .temp {
    font-size: 1em;
  }

  .text {
    font-size: 0.8em;
  }
}
</style>
