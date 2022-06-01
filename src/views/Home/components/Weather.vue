<template></template>

<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const key = 'f769a71457c54fe686bd0c8abf9d0174'
const location = computed(() => store.state.app.currentPosition)
const url = `https://devapi.qweather.com/v7/weather/now?key=${key}&location=${location.value}`

console.log(url);

// axios.get()
</script>

<style></style>
