<template>
    <div>
        <h1>{{ topping.name }}</h1>
        <img :src="topping.icon" alt="">
    </div>
</template>

<script setup>
defineProps({
    name: String,
    topic: String,
})
</script>

<style scoped>

</style>