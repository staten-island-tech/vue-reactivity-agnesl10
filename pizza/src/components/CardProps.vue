<template>
  <div>
    <h1>{{ topping.name }}</h1>
    <img :src="topping.icon" alt="" />
    <button type="button">Add to Pizza</button>
  </div>
</template>

<script setup>
defineProps({
  topping: Object,
})
</script>

<style scoped></style>
