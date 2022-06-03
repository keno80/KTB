<template>
<div class="i-weather-100"></div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const data = reactive({
  weather: computed(() => JSON.parse(sessionStorage.weather)),
  city: computed(() => sessionStorage.city), //  地理位置信息
  location: computed(() => store.state.app.currentLocation), // 经纬度信息
  refresh_now: false, // 立即刷新天气
})

const key = 'f769a71457c54fe686bd0c8abf9d0174'
const cityInfoUrl = `https://geoapi.qweather.com/v2/city/lookup?key=${key}&location=东坡&adm=四川`

// 获取当前区域地理位置信息
const getLocation = () => {
  axios.get(cityInfoUrl).then((res) => {
    if (res.data.code === '200') {
      sessionStorage.city = res.data.location[0].adm2 + res.data.location[0].name
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
        sessionStorage.weather = JSON.stringify(res.data.now)
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

<style></style>
