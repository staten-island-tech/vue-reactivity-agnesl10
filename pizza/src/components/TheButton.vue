<template>
  <div>
    <button @click="add(topping)">Add to Pizza</button>
  </div>
</template>

<script setup>
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
</style>
