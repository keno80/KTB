<template>
  <div class="favorite">
    <div class="favorite_item" v-for="item in 10" :key="item">
      <div>
        <div class="items"></div>
        <div class="item_name">GIT</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.favorite {
  // background-color: var(--c-home-bg-color-2);
  // backdrop-filter: blur(5px);
  margin-top: 30px;
  border-radius: 14px;
  // padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: 'Google Sans English';

  .favorite_item {
    background-color: var(--c-home-bg-color-2);
    backdrop-filter: blur(5px);
    border-radius: 14px;
    width: 132px;
    margin: 10px 0;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px 0;
    cursor: pointer;

    &:hover {
      box-shadow: inset 0px 0px 6px 0px var(--c-text-color),
        0px 0px 6px 0 var(--c-text-color);
      border: 1px solid var(--c-border-color-6);
      transition: ease-in-out 0.2s;
    }

    .items {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: #fff;
      margin-bottom: 20px;
    }
  }
}
</style>
