<template>
    <div class="card">
        <CardProps v-for="topping in toppings" :key="topping.name" :topping="topping" />
    </div>
</template>

<script setup>
import CardProps from '@/components/CardProps.vue';
import { toppings } from '@/components/TheCards.vue';
</script>

<style scoped>

</style>