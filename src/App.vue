<template>
  <my-header :menu-items="menuItems"/>
  <my-cards :cards="cards"/>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyCard from "@/components/MyCard.vue";
import MyCards from "@/components/MyCards.vue";

export default {
  components: {MyCards, MyCard, MyHeader},
  data() {
    return {
      menuItems: [
        {companyTitle: 'Apple'},
        {companyTitle: 'Samsung'},
        {companyTitle: 'Xiaomi'}
      ],
      cards: [
        {
          id: new Date(),
          pic: "@/assets/MacBook_Pro_1.jpg",
          model: "MacBook Pro",
        },
        {
          id: new Date(),
          pic: "",
          model: "iPhone 12",
        },
        {
          id: new Date(),
          pic: "",
          model: "Apple Watch Series 8",
        }]
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #000
}


</style>