<template>
  <div class="card">
    <img
        class="card__img"
        src="{{card.pic}}"
        alt="{{ card.model }}"
    />
    <h3 class="card__title">{{ card.model }}</h3>
    <p class="card__subtitle">05.05.2023</p>
    <my-button>Купить</my-button>
  </div>
</template>

<script>

import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.card {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2%;
  -webkit-box-shadow: 14px 14px 26px -5px rgba(22, 66, 99, 0.35);
  -moz-box-shadow: 14px 14px 26px -5px rgba(22, 66, 99, 0.35);
  box-shadow: 14px 14px 26px -5px rgba(22, 66, 99, 0.35);
}


.card__title {
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: rgb(0, 0, 30);
  margin: 15px auto 15px 0;
}


</style>