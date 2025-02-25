<template>
  <div class="container">
    <CardProps class="card" v-for="topping in toppings" :key="topping.name" :topping="topping">
      <button class="add" @click="add(topping)">Add to Pizza</button>
      <button class="remove" @click="remove(topping)">Remove from Pizza</button>
    </CardProps>
    <div class="current">
      <img
        class="newtoppings"
        v-for="(topping, index) in onPizza.ingredients"
        :key="topping.name"
        :class="topping.name"
        :src="topping.image"
        :alt="topping.name"
        :style="{ zIndex: index }"
      />
    </div>
  </div>
</template>

<script setup>
import CardProps from '@/components/CardProps.vue'
import { toppings } from '@/arrays/toppings'
import { onPizza } from '@/arrays/pizza'

function add(topping) {
  onPizza.ingredients.push(topping)
  onPizza.total += topping.price
  console.log(topping)
  console.log(onPizza)
}
function remove(topping) {
  if (onPizza.ingredients.includes(topping)) {
    const index = onPizza.ingredients.indexOf(topping)
    onPizza.ingredients.splice(index, 1) // one tells me that it is removing one not just clearing the array
    console.log(topping)
    console.log(onPizza)
  } else {
    alert("You haven't added that to your pizza yet !!")
  }
}
</script>

<style scoped>
.toppings {
  margin: 1.3%;
}
.card {
  width: 150px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Distributes items evenly across rows */
  gap: 1rem; /* Adds space between items */
  width: 50%;
  margin: 1rem auto;
  padding: 1.3%;
  flex-direction: row;
  border: 0;
}
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
.current {
  position: relative; /* Ensures absolute positioning works for children */
  width: 100%;
  height: 300px; /* Adjust the height as needed */
}
.newtoppings:not(.sauce):not(.cheese) {
  position: absolute;
  width: 90%;
  right: 695px;
  bottom: 1530px;
  transition: all 0.3s ease-in-out;
}
.sauce {
  width: 110%;
  position: absolute;
  right: 650px;
  bottom: 1475px;
  transition: all 0.3s ease-in-out;
}
.cheese {
  width: 110%;
  position: absolute;
  right: 650px;
  bottom: 1475px;
  transition: all 0.3s ease-in-out;
}
</style>
