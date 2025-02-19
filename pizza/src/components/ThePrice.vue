<template>
    <div>
        <h2 v-for="topping in onPizza" :key="topping.name">total price of pizza: {{ totalPrice }}</h2>
    </div>
</template>

<script setup>
import { onPizza } from '@/arrays/pizza'
import { computed } from 'vue'

</script>

<style scoped>

</style>