<template>
  <!-- <div class="position">
    <div class="i-mdi:map-marker"></div>
    <span>{{ data.city }}</span>
  </div> -->
  <div class="weather">
    <div :class="data.weather.icon" class="icon"></div>
    <div class="weather_info">
      <p class="temp">{{ data.weather.temp }}°</p>
      <p class="text">{{ data.weather.text }}</p>
    </div>
  </div>
  <div class="misc">
    <div class="misc_style">
      <div class="misc_item">
        <p>{{ data.weather.windScale }}</p>
        <p>{{ data.weather.windDir }}</p>
      </div>
      <div class="misc_item">
        <p>{{ data.weather.feelsLike }}°</p>
        <p>体感温度</p>
      </div>
      <div class="misc_item">
        <p>{{ data.weather.precip }}mm</p>
        <p>降水量</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const data = reactive({
  weather: sessionStorage.weather
    ? computed(() => JSON.parse(sessionStorage.weather))
    : {},
  city: sessionStorage.city ? computed(() => sessionStorage.city) : '', //  地理位置信息
  location: computed(() => store.state.app.currentLocation), // 经纬度信息
  refresh_now: false, // 立即刷新天气
})

const key = 'f769a71457c54fe686bd0c8abf9d0174'
const cityInfoUrl = `https://geoapi.qweather.com/v2/city/lookup?key=${key}&location=东坡&adm=四川`

// 获取当前区域地理位置信息
const getLocation = () => {
  axios.get(cityInfoUrl).then((res) => {
    if (res.data.code === '200') {
      sessionStorage.city = res.data.location[0].adm2
      const location = res.data.location[0].lon + ',' + res.data.location[0].lat
      store.dispatch('app/setCurrentLocation', location)
      data.refresh_now = true
      getWeather()
    }
  })
}

const getWeather = () => {
  const _time = (Date.now() - localStorage.update_time) / 1000 / 60
  // 更新天气之前判断是否过了一个小时或者是第一次打开页面
  if (_time > 60 || !localStorage.update_time) {
    // 利用获取到的地理信息请求天气信息
    const weatherUrl = `https://devapi.qweather.com/v7/weather/now?key=${key}&location=${data.location}`

    axios.get(weatherUrl).then((res) => {
      if (res.data.code === '200') {
        res.data.now.icon = `i-weather-${res.data.now.icon}`
        sessionStorage.weather = JSON.stringify(res.data.now)
        data.weather = res.data.now
        data.refresh_now = false
        // 获取/更新成功后记录当前的时间戳
        localStorage.update_time = Date.now()
      }
    })
  }
}

onMounted(() => {
  // 判断是否有地理位置信息
  data.location !== '' ? getWeather() : getLocation()
})
</script>

<style lang="scss" scoped>
.weather {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Google Sans English';
  margin-bottom: 10px;

  .icon {
    width: 2em;
    height: 2em;
    margin-right: 10px;
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

.misc {
  font-family: 'Google Sans English';
  display: flex;
  justify-content: center;

  .misc_style {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    width: 92%;
    text-align: center;
    padding: 2px 0;
  }

  p {
    margin: 0;
    font-size: 0.9em;
  }
}
</style>
