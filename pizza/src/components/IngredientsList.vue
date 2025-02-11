<template>
  <div class="toppings">
    <CardProps v-for="topping in toppings" :key="topping.name" :topping="topping"
      ><button @click="onPizza.push(topping)">Add To Pizza</button></CardProps
    >
  </div>
</template>

<script setup>
import CardProps from '@/components/CardProps.vue'
const toppings = [
  {
    name: 'basil',
    icon: '/basilicon.png',
    image: '/basil.png',
    topic: 'herb',
    price: 100,
  },
  {
    name: 'bellpepper',
    icon: '/bellpeppericon.png',
    image: '/bellpepper.png',
    topic: 'vegetable',
    price: 100,
  },
  {
    name: 'cheese',
    icon: '/cheeseicon.png',
    image: '/cheese.png',
    topic: 'dairy',
    price: 50,
  },
  {
    name: 'sauce',
    icon: '/sauceicon.png',
    image: '/sauce.png',
    topic: 'base',
    price: 50,
  },
  {
    name: 'eggplant',
    icon: '/eggplanticon.png',
    image: '/eggplant.png',
    topic: 'vegetable',
    price: 100,
  },
  {
    name: 'mushroom',
    icon: '/mushroomicon.png',
    image: '/mushrrom.png',
    topic: 'fungus',
    price: 100,
  },
  {
    name: 'olive',
    icon: '/oliveicon.png',
    image: '/olive.png',
    topic: 'fruit',
    price: 100,
  },
  {
    name: 'onion',
    icon: '/onionicon.png',
    image: '/onion.png',
    topic: 'vegetable',
    price: 100,
  },
  {
    name: 'pepperoni',
    icon: '/pepicon.png',
    image: '/pepperoni.png',
    topic: 'meat',
    price: 100,
  },
  {
    name: 'sausage',
    icon: '/sausageicon.png',
    image: '/sausage.png',
    topic: 'meat',
    price: 100,
  },
  {
    name: 'pineapple',
    icon: '/pineappleicon.png',
    image: '/pineapple.png',
    topic: 'fruit',
    price: 100,
  },
]
let onPizza = []
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
