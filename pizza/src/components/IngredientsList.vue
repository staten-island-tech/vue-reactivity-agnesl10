<template>
  <div class="container">
    <CardProps class="card" v-for="topping in toppings" :key="topping.name" :topping="topping"
      ><button @click="add(topping)">Add To Pizza</button></CardProps
    >
  </div>
</template>

<script setup>
import CardProps from '@/components/CardProps.vue'
import { toppings } from '@/arrays/toppings'
import { onPizza } from '@/arrays/pizza'
function add(topping) {
  onPizza.push(topping)
  console.log(topping)
  console.log(onPizza)
}
</script>

<style scoped>
button {
  background-color: #dcc1a1;
  color: #4a3926;
  border-color: transparent;
  border-radius: 10px;
  font-size: 15px;
  font-family: 'DM Sans', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
.toppings{
  margin: 1.3%;
}
.card{
  width: 60%;
}
.container {
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between; /* Distributes items evenly across rows */
  gap: 1rem; /* Adds space between items */
  width: 25%;
  margin: 1rem auto;
  padding: 1.3%;
  flex-direction: row;
  border: 0;
}
</style>
