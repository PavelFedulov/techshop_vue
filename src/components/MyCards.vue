<template>
  <div class="wrapper__full">
    <div class="cards">
      <my-card
          v-for="card in cards"
          :key="card.id"
          :card="card"
      />
    </div>
  </div>
</template>

<script>
import MyCard from "@/components/MyCard.vue";

export default {
  components: {MyCard},
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}

</script>

<style scoped>
.cards {
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 57px;
  row-gap: 57px;
}
.wrapper__full {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
