<template>
  <select
      class="color__field"
      @change="changeColor">
    <option disabled value="">Choose the color</option>
    <option v-for="color in deviceColors"
            :key="color.color"
            :value="color.color"
    >
      {{ color.color }}
    </option>
  </select>
</template>
<script>
export default {
  name: "my-select-color",
  props: {
    deviceColors: {
      type: Array,
      required: true
    }
  },
  methods: {
    changeColor(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.color__field {
  width: 100%;
  border: solid 1px rgba(0, 0, 0, .197);
  border-radius: 10px;
  padding: 10px;
}
</style>