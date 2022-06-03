<template>
  <div class="player_box">
    <div class="album"></div>
    <div class="player">
      <div class="song">
        <p>Song Name</p>
      </div>
      <div class="controll">
        <div class="i-mdi:play icon"></div>
        <div class="i-mdi:skip-next icon"></div>
        <div class="i-mdi:volume-medium icon"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.player_box {
  padding: 0 10px;
  display: flex;

  .album {
    width: 90px;
    height: 90px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }

  .player {
    margin-left: 10px;

    .controll {
      display: flex;
      justify-content: center;

      .icon {
        width: 1.8em;
        height: 1.8em;
      }
    }
  }
}
</style>
