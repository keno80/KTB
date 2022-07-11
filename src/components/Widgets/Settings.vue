<template>
  <div class="settings">
    <div class="settings_item">
      <div class="title">- - - 天气设置 - - -</div>
      <div class="body">
        <div class="body_item">
          <div class="body_item_title">修改位置：</div>
          <div class="body_item_content">
            <el-cascader :options="area" clearable />
          </div>
        </div>
        <div class="body_item">
          <div class="body_item_title">刷新间隔：</div>
          <div class="body_item_content">
            <el-radio label="1" size="large">Option 1</el-radio>
            <el-radio label="1" size="large">Option 1</el-radio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import area from '@/utils/area.js'

console.log(area)
</script>

<style lang="scss" scoped>
.settings_item {
  .title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 14px;
  }

  .body {
    .body_item {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }
  }

  .body_item_content {
    ::v-deep(.el-cascader .el-input .el-input__wrapper) {
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: none;

      .el-input__inner {
        color: #fff;
        &::placeholder {
          color: #fff;
        }
      }

      .el-input__suffix {
        color: #fff;
      }
    }
  }
}
</style>
