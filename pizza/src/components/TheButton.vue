<template>
  <div>
    <button class="add" @click="add(topping)">Add to Pizza</button>
    <button class="remove" @click="remove(topping)">Remove from Pizza</button>
  </div>
</template>

<script setup>
import { onPizza } from '@/arrays/pizza'
function add(topping) {
  onPizza.push(topping)
  console.log(topping)
  console.log(onPizza)
}
function remove(topping) {
  onPizza.splice(topping)
  console.log(topping)
  console.log(onPizza)
}
</script>

<style scoped>
.add {
  background-color: #dcc1a1;
  color: #4a3926;
  border-color: transparent;
  border-radius: 10px;
  font-size: 15px;
  font-family: 'DM Sans', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  margin: 5px;
}
.remove {
  background-color: #ca7c6c;
  color: #602c23;
  border-color: transparent;
  border-radius: 10px;
  font-size: 15px;
  font-family: 'DM Sans', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  margin: 5px;
}
</style>
