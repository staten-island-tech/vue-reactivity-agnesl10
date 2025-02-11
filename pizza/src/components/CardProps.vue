<template>
  <div class="card">
    <h1>{{ topping.name }}</h1>
    <img :src="topping.icon" alt="" />
    <h5>${{ topping.price }}</h5>
    <button type="button">Add to Pizza</button>
  </div>
</template>

<script setup>
defineProps({
  topping: Object,
})
function toPizza(topping) {}
</script>

<style scoped>
.card {
  background-color: #f0dfcc;
  border: solid 5px #cead87;
  border-radius: 15px;
  margin: 5%;
  width: 20%;
  height: 60%;
  align-items: center;
  text-align: center;
  padding: 1.5%;
  font-family: "DM Sans", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
img {
  height: 30%;
  width: 30%
}
button {
  background-color: #dcc1a1;
  color: #4a3926;
  border-color: transparent;
  border-radius: 10px;
}
</style>
