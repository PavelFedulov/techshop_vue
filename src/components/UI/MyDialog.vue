<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: rgba(22, 66, 99, 0.35);
  z-index: 999;
  animation-duration: 0.6s;
  /* Время работы анимации */
  animation-fill-mode: both;
  /* Поведение анимации */
  animation-name: fadeInDown;
  /* Имя анимации */
}

.dialog__content {
  margin: auto;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
  background-color: white;
}
</style>