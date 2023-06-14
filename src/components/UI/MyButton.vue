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
  border: none;
  background-color: rgba(112, 99, 198, 1);
  border-radius: 10px;
  width: auto;
  height: 100%;
  color: aliceblue;
}

.btn:hover {
  opacity: .50;
}
</style>