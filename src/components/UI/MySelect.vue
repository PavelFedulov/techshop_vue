<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value=""></option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
      {{ option.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String
    },
    options:{
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('updateValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>