<template>
  <div class="card">
    <h1>{{ topping.name }}</h1>
    <img :src="topping.icon" alt="" />
    <h5>${{ topping.price }}</h5>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  topping: Object,
})
</script>

<style scoped>
.card {
  background-color: #f0dfcc;
  border: solid 5px #cead87;
  border-radius: 15px;
  margin: 5%;
  width: 15%;
  height: 60%;
  align-items: center;
  text-align: center;
  padding: 0.8%;
  font-family: 'DM Sans', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 30px;
}
img {
  height: 35%;
  width: 35%;
}
h5 {
  font-size: 20px;
}
</style>
