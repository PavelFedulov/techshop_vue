<template>
  <form @submit.prevent class="order__form">
    <h4 class="count__title">Choose the count</h4>
    <my-input class=count__field type="Number" min="1"></my-input>
    <h4 class="color__title">Choose the color</h4>
    <!--    <ul class="color__list">-->
    <!--      <li-->
    <!--          class="color__item"-->
    <!--          v-for="color in deviceColors"-->
    <!--          :key="color.color"-->
    <!--      >-->
    <select v-model="selected" class="color__field">
      <option disabled value="">Choose the color</option>
      <option v-for="color in deviceColors"
              :key="color.color"
      >
        {{ color.color }}
      </option>
    </select>
    <!--        <input type="radio" :value="color.color" name="color"/>-->
    <!--        <label>{{ color.color }}</label>-->

    <!--      </li>-->
    <!--    </ul>-->
    <h4 class="comment__title">Write you comment for the order</h4>
    <my-input class="comment__field" placeholder="Write your comment here..."/>
    <my-button class="order__btn" @click="createOrder">Order</my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyRadio from "@/components/UI/MyRadio.vue";
import MyButton from "@/components/UI/MyButton.vue";
export default {
  props: {
    deviceColors: {
      type: Array,
      required: true
    },
    orders: {
      type: Array,
      required: true,
    }
  },
  components: {MyRadio, MyInput, MyButton}
  methods: {
    createOrder() {

    }
  }
}
</script>

<style scoped>
.order__form {
  height: 30%;
}

ul {
  list-style: none;
}

.count__field {
  border: solid 1px rgba(0, 0, 0, .197);
  border-radius: 10px;
}

.color__title {
  margin-top: 5%;
  margin-bottom: 5%;
}

.color__field {
  width: 100%;
  border: solid 1px rgba(0, 0, 0, .197);
  border-radius: 10px;
  padding: 10px;
}

.comment__title {
  margin-top: 5%;
}

.comment__field {
  border: solid 1px rgba(0, 0, 0, .197);
  border-radius: 10px;
}
.order__btn {
  margin-top: 15px;
  padding: 10px;
  width: 100%;
}

</style>