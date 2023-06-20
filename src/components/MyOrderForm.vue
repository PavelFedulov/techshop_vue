<template>
  <form @submit.prevent class="order__form">
    <h3>{{ modelName }}</h3>
    <h4 class="count__title">Choose the count</h4>
    <my-input
        class=count__field
        type="Number"
        min="1"
        v-model="order.count"
    />
    <h4 class="color__title">Choose the color</h4>

    <my-select-color
        :device-colors="deviceColors"
        v-model="order.selectedColor"
    />

    <h4 class="comment__title">Write you comment for the order</h4>
    <my-input
        v-model="order.comment"
        class="comment__field"
        placeholder="Write your comment here..."
    />
    <my-button
        class="order__btn"
        @click="createOrder"
    >Order
    </my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyRadio from "@/components/UI/MyRadio.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelectColor from "@/components/UI/MySelectColor.vue";

export default {
  props: {
    deviceColors: {
      type: Array,
      required: true
    },
    modelName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      order: {
        count: '',
        selectedColor: '',
        comment: '',
      }
    }
  },
  components: {MySelectColor, MyRadio, MyInput, MyButton},

  methods: {
    createOrder() {
      this.order.id = Date.now();
      this.$emit('create', this.order);
      this.order = {
        count: this.order.count,
        selectedColor: this.order.selectedColor,
        comment: this.order.comment,
      }
      console.log(this.modelName);
    },
    changeColor(event) {
      this.$emit('update:order.selectedColor', event.target.value)
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