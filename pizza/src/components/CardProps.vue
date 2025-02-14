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
  align-items: center;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  padding: 1.3%;
  text-align: center;
  font-family: 'DM Sans', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  width: 150px;
}
h1 {
  font-size: 25px;
}
img {
  height: 40%;
  width: 40%;
}
h5 {
  font-size: 20px;
  margin: 0 auto;
}
</style>
