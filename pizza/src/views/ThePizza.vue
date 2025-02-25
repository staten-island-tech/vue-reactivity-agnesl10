<template>
  <div class="base">
    <img class="dough" src="/dough.png" alt="" />
    <div class="chosenToppings"></div>
    <div>
      <IngredientsList />
    </div>
    <div>
      <ThePrice />
    </div>
  </div>
</template>

<script setup>
import IngredientsList from '@/components/IngredientsList.vue'
import ThePrice from '@/components/ThePrice.vue'
</script>

<style scoped>
.dough {
  height: 15%;
  width: 30%;
  margin: 35px;
  margin-top: 80px;
  margin-left: 10%;
  text-align: left;
}

.base {
  display: flex;
  flex-direction: row;
}
</style>
