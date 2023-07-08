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
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/firebase";

export default {
  components: {MyCard},
  data() {
    return {
      cards: []
    }
  },

  methods: {
    async getCards() {
      const querySnapshot = await getDocs(collection(db, "cards"));
      querySnapshot.forEach((doc) => {
        const card = {
          id: doc.id,
          pic: doc.data().pic,
          model: doc.data().model

        }
        this.cards.push(card);
      });
    }
  },
  mounted() {
    this.getCards()
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
