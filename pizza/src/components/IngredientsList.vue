<template>
  <div class="container">
    <CardProps class="card" v-for="topping in toppings" :key="topping.name" :topping="topping"
      ><TheButton
    /></CardProps>
  </div>
</template>

<script setup>
import CardProps from '@/components/CardProps.vue'
import { toppings } from '@/arrays/toppings'
import TheButton from './TheButton.vue'
</script>

<style scoped>
.toppings {
  margin: 1.3%;
}
.card {
  width: 50%;
}
.container {
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between; /* Distributes items evenly across rows */
  gap: 1rem; /* Adds space between items */
  width: 50%;
  margin: 1rem auto;
  padding: 1.3%;
  flex-direction: row;
  border: 0;
}
</style>
