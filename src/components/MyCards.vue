<template>
  <div class="cards">
    <my-card
        v-for="card in cards"
        :key="card.id"
        :card="card"
    />
  </div>
</template>

<script>
import MyCard from "@/components/MyCard.vue";

export default {
  components: {MyCard},
  props : {
    cards: {
      type: Array,
      required: true
    }
  }
}

</script>

<style scoped>
.cards {
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 57px;
  row-gap: 57px;
}
</style>
