<template>
  <div class="wrapper">
    <header class="header__wrapper header">
      <div class="header__logo">
        <h1 class="header__title">Tech Shop</h1>
      </div>
      <nav class="header__nav">
        <ul class="header__list">
          <li
              class="header__item"
              v-for="item in menuItems"
              :key="item.companyTitle"
          >
            {{ item.companyTitle }}
          </li>
        </ul>
      </nav>

    </header>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 2%;
  z-index: 998;
  box-shadow: -1px 10px 11px -4px rgba(22, 66, 99, 0.35);
  background-color: aliceblue;
}

.header__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 2%;
}

.header__logo {
  padding-left: 5%;
  cursor: default;
}

.header__title {
  font-size: 36px;
  color: rgb(0, 0, 30);
  text-decoration: underline;
}

.header__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}

.header__item {
  margin-right: 82px;
  font-size: 18px;
  line-height: 24px;
  color: rgb(0, 0, 30);
  text-decoration: none;
  cursor: pointer;
}

.header__item:hover,
.header__item:focus,
.header__item:active {
  opacity: .75;
}

li {
  list-style-type: none;
}
</style>