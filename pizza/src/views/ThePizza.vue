<template>
  <div class="setup">
    <div class="base">
      <img class="dough" src="/dough.png" alt="" />
      <ThePrice />
    </div>
    <div class="ingredients">
      <IngredientsList />
    </div>
  </div>
</template>

<script setup>
import IngredientsList from '@/components/IngredientsList.vue'
import ThePrice from '@/components/ThePrice.vue'
</script>

<style scoped>
.dough {
  width: 120%;
  margin: 35px;
  margin-top: 80px;
  margin-left: 15%;
  text-align: left;
}
.setup{
  display: flex;
  flex-direction: row;
}
.base {
  display: flex;
  flex-direction: column;
}
.ingredients{
  margin-right: 0 auto;
  border: 0;
}
</style>
