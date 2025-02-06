<template>
  <div>
    <h2 v-for="topping in toppings" :key="topping">{{ topping }}</h2>
  </div>
</template>

<script setup>
const toppings = [
  { name: 'basil', icon: 'pizza\public\basilicon.png',image:'pizza\public\basil.png', topic: 'herb' },
  { name: 'bellpepper', icon: 'pizza\public\bellpeppericon.png',image:'pizza\public\bellpepper.png', topic: 'vegetable' },
  { name: 'cheese', icon: 'pizza\public\cheeseicon.png',image:'', topic: 'dairy' },
  { name: 'sauce', icon: 'pizza\public\sauceicon.png',image:'pizza\public\sauce.png', topic: 'base' },
  { name: 'eggplant', icon: 'pizza\public\eggplanticon.png',image:'pizza\public\eggplant.png', topic: 'vegetable' },
  { name: 'mushroom', icon: 'pizza\public\mushroomicon.png',image:'pizza\public\mushrrom.png', topic: 'fungus' },
  { name: 'olive', icon: 'pizza\public\oliveicon.png',image:'pizza\public\olive.png', topic: 'fruit' },
  { name: 'onion', icon: 'pizza\public\onionicon.png',image:'pizza\public\onion.png', topic: 'vegetable' },
  { name: 'pepperoni', icon: 'pizza\public\pepicon.png',image:'pizza\public\pepperoni.png', topic: 'meat' },
  { name: 'sausage', icon: 'pizza\public\sausageicon.png',image:'pizza\publi\sausage.png', topic: 'meat' },
  { name: 'pineapple', icon: 'pizza\public\pineappleicon.png',image:'pizza\public\pineapple.png', topic: 'fruit' },
]
</script>

<style scoped></style>
