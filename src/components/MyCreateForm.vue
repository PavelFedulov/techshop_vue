<template>
  <form @submit.prevent>
    <h4>Creation card</h4>
    <my-input v-model="card.pic" type="text" placeholder="Pic link"/>
    <my-input v-model="card.model" type="text" placeholder="Title"/>
    <my-input v-model="card.subtitle" type="text" placeholder="Subtitle" />
    <my-button class="crt__btn-form" @click="createPost">Create</my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: 'my-create-form',
  components: {MyButton, MyInput},
  data() {
    return {
      card: {
        pic: '',
        model: '',
        subtitle: '',
      }
    }
  },
  methods: {
    createPost() {
      this.card.id = Date.now();
      this.$emit('create', this.card)
      this.card = {
        pic: '',
        title: '',
        subtitle: '',
      }
    }
  }
}
</script>

<style scoped>
.crt__btn-form {
  padding: 15px;
  width: 100%;
  margin-top: 15px;
}
.crt__btn-form:hover {
  opacity: .75;
  cursor: pointer;
}
</style>