<template>
  <div class="toppings">
    <CardProps v-for="topping in toppings" :key="topping.name" :topping="topping"></CardProps>
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
  },
  {
    name: 'bellpepper',
    icon: '/bellpeppericon.png',
    image: '/bellpepper.png',
    topic: 'vegetable',
  },
  {
    name: 'cheese',
    icon: '/cheeseicon.png',
    image: '/cheese.png',
    topic: 'dairy',
  },
  {
    name: 'sauce',
    icon: '/sauceicon.png',
    image: '/sauce.png',
    topic: 'base',
  },
  {
    name: 'eggplant',
    icon: '/eggplanticon.png',
    image: '/eggplant.png',
    topic: 'vegetable',
  },
  {
    name: 'mushroom',
    icon: '/mushroomicon.png',
    image: '/mushrrom.png',
    topic: 'fungus',
  },
  {
    name: 'olive',
    icon: '/oliveicon.png',
    image: '/olive.png',
    topic: 'fruit',
  },
  {
    name: 'onion',
    icon: '/onionicon.png',
    image: '/onion.png',
    topic: 'vegetable',
  },
  {
    name: 'pepperoni',
    icon: '/pepicon.png',
    image: '/pepperoni.png',
    topic: 'meat',
  },
  {
    name: 'sausage',
    icon: '/sausageicon.png',
    image: '/sausage.png',
    topic: 'meat',
  },
  {
    name: 'pineapple',
    icon: '/pineappleicon.png',
    image: '/pineapple.png',
    topic: 'fruit',
  },
]
</script>

<style scoped></style>
