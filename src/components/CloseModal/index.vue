<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal_cover"></div>
      <div class="modal_content">
        <div class="modal_title">
          <span>提示</span>
        </div>
        <div class="modal_body">
          <div class="i-mdi:alert-box icon"></div>
          <span>确定要删除这个快捷方式吗？</span>
        </div>
        <div class="modal_footer">
          <div class="btn btn_cancel" @click="cancel">
            <span>取消</span>
          </div>
          <div class="btn btn_confirm" @click="confirm">
            <span>确定</span>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
const emits = defineEmits(['confirm', 'cancel'])

const confirm = () => {
  emits('confirm')
}

const cancel = () => {
  emits('cancel')
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal_cover {
  background-color: rgba(0, 0, 0, 0.35);
  height: 100vh;
  backdrop-filter: blur(5px);
}

.modal_content {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  width: 400px;
  border-radius: 14px;
  padding: 14px;

  .modal_title {
    span {
      font-size: 1.2em;
    }
  }

  .modal_body {
    padding: 14px 0;
    .icon {
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;
    }
  }

  .modal_footer {
    display: flex;
    justify-content: flex-end;
    .btn {
      cursor: pointer;

      &:first-child {
        margin-right: 14px;
      }

      &:hover span {
        text-shadow: 0 0 6px #fff;
      }

      // span {
      // }
    }
  }
}
</style>
