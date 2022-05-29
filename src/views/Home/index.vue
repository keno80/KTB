<template>
  <div class="home">
    <div class="home_main">
      <div class="time">
        <p>
          {{ data.time ? data.time.toLocaleString() : '00:00:00' }}
        </p>
      </div>
      <div class="search">
        <div class="i-mdi:magnify inner-search"></div>
        <input placeholder="Search what you want" />
      </div>
      <div class="favorite">
        <div class="favorite_item" v-for="item in 10" :key="item">
          <div class="items">
            <div class="item"></div>
            <div class="item_name">GIT</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { timer } from '@/utils/tools'

const data = reactive({
  time: '',
})

setInterval(() => {
  data.time = timer()
}, 1000)

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
    width: 600px;
  }

  .time {
    font-family: 'Google Sans English';
    width: 100%;
    display: flex;
    justify-content: center;

    p {
      font-size: 6rem;
      color: #fff;
      margin: 0;
    }
  }

  .search {
    position: relative;

    .inner-search {
      position: absolute;
      color: rgb(69, 69, 69);
      height: 100%;
      width: 1.28em;
      margin: 0 20px;
      z-index: 1;
    }

    input {
      width: calc(100% - 50px);
      height: 42px;
      border: none;
      border-radius: 30px;
      padding-inline-start: 50px;
      font-size: 1rem;
      font-family: 'Google Sans English';
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);

      &:focus-visible {
        outline: none;
      }
    }
  }

  .favorite {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    margin-top: 20px;
    border-radius: 30px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .favorite_item {
      width: 100px;
      margin: 10px 0;
      border: 1px solid aquamarine;

      .items {
        display: flex;
        justify-content: center;
      }

      .item {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: aquamarine;
      }
    }
  }
}
</style>
