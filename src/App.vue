<template>
  <my-header :menu-items="menuItems"></my-header>
  <my-button class="crt__btn" @click="showCreationForm">Create</my-button>
  <my-dialog v-model:show="creationFormVisible">
    <my-create-form @create="createCard"/>
  </my-dialog>
  <my-dialog v-model:show="orderFormVisible">
    <my-order-form @create="createOrder" :device-colors="deviceColors" orders="orders" model-name="{{ modelName }}"/>
  </my-dialog>
  <my-cards
      :cards="cards"
      @click="showOrder"
  />
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyCard from "@/components/MyCard.vue";
import MyCards from "@/components/MyCards.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyCreateForm from "@/components/MyCreateForm.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MyOrderForm from "@/components/MyOrderForm.vue";

export default {
  components: {MyOrderForm, MyButton, MyCreateForm, MyDialog, MyCards, MyCard, MyHeader},
  data() {
    return {
      cards: [],
      orders: [],
      modelName: '',
      creationFormVisible: false,
      orderFormVisible: false,
      menuItems: [
        {companyTitle: 'Apple'},
        {companyTitle: 'Samsung'},
        {companyTitle: 'Xiaomi'}
      ],
      deviceColors: [
        {color: "Black"},
        {color: "Gold"},
        {color: "Silver"}
      ]
      // cards: [
      //   {
      //     id: new Date(),
      //     pic: require("@/assets/MacBook_Pro_1.jpg"),
      //     model: "MacBook Pro",
      //   },
      //   {
      //     id: new Date(),
      //     pic: require("@/assets/iPhone_12_1.jpg"),
      //     model: "iPhone 12",
      //   },
      //   {
      //     id: new Date(),
      //     pic: require("@/assets/Apple_Watch_1.jpg"),
      //     model: "Apple Watch Series 8",
      //   },
      //   {
      //     id: new Date(),
      //     pic: require("@/assets/Apple_Watch_1.jpg"),
      //     model: "Apple Watch Series 8",
      //   }
      // ]
    }
  },
  methods: {
    createCard(card) {
      this.cards.push(card);
      this.dialogVisible = false;
    },
    createOrder(order) {
      this.orders.push(order);
      this.orderFormVisible = false;
      console.log(this.orders);
    },
    showCreationForm() {
      this.creationFormVisible = true;
    },
    showOrder() {
      this.orderFormVisible = true;
      this.modelName = this.cards[0].model.toString();
    },
    async fetchCards() {
      try {
        const response = await axios.get('https://mocki.io/v1/957d8fd4-d1dd-4a38-bb63-053af9e4196f');
        this.cards = response.data;
      } catch (e) {
        alert('Error')
      }
    }
  },
  mounted() {
    this.fetchCards()
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


.crt__btn {
  margin-top: 120px;
  margin-left: 15px;
  padding: 15px;
}

.crt__btn:hover {
  cursor: pointer;
  opacity: .75;
}

</style>