<template>
  <form @submit.prevent>
    <h4>Choose the count</h4>
    <my-input type="Number" min="1"></my-input>
    <h4>Choose the color</h4>
    <my-select></my-select>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MySelect from "@/components/UI/MySelect.vue";

export default {
  components: {MySelect, MyInput}

}
</script>

<style scoped>

</style>