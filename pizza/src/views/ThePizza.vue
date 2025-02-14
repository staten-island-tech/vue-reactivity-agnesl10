<template>
  <div class="base">
    <img class="dough" src="/dough.png" alt="" />
    <div class="container">
      <IngredientsList />
    </div>
  </div>
</template>

<script setup>
import IngredientsList from '@/components/IngredientsList.vue'
</script>

<style scoped>
.dough {
  height: 15%;
  width: 30%;
  margin: 35px;
  margin-top: 80px;
  margin-left: 8%;
  text-align: left;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Distributes items evenly across rows */
  gap: 1rem; /* Adds space between items */
  width: 50%;
  margin: 1rem auto;
  padding: 1.3%;
  flex-direction: row;
  border: 0;
}
.base {
  display: flex;
  flex-direction: row;
}
</style>
