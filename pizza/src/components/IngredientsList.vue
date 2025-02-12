<template>
  <div class="toppings">
    <CardProps v-for="topping in toppings" :key="topping.name" :topping="topping"
      ><button @click="add(topping)">Add To Pizza</button></CardProps
    >
  </div>
</template>

<script setup>
import CardProps from '@/components/CardProps.vue'
import { toppings } from '@/arrays/toppings'
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
</style>
