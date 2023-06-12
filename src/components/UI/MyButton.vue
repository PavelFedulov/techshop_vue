<template>
  <button class="btn">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn {
  margin-top: 15px;
  border: none;
  background-color: rgba(112, 99, 198, 1);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  color: aliceblue;
}
</style>