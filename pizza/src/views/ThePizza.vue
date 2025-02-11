<template>
  <div class="base">
    <img src="/dough.png" alt="" />
    <IngredientsList class="ingredients" />
  </div>
</template>

<script setup>
import IngredientsList from '@/components/IngredientsList.vue'
</script>

<style scoped>
img {
  height: 30%;
  width: 30%;
  margin: 35px;
  margin-top: 80px;
  margin-left: 10%;
  text-align: left;
}
</style>
