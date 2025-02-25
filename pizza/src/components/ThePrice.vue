<template>
  <div>
    <h2 v-for="topping in onPizza.ingredients" :key="topping.name">Added {{ topping.name }}</h2>
    <h3>total price of pizza:{{ onPizza.total }}</h3>
  </div>
</template>

<script setup>
import { onPizza } from '@/arrays/pizza'
import { ref } from 'vue'
</script>

<style scoped></style>
