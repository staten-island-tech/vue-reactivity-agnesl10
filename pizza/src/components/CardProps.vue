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
function toPizza(topping) {}
</script>

<style scoped>
div {
  background-color: #806e58;
  border: solid #806e58;
}
</style>
