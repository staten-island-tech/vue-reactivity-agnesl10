<template>
  <div class="price">
    <h3> total cost: ${{ onPizza.total }}.00</h3>
  </div>
</template>

<script setup>
import { onPizza } from '@/arrays/pizza'


</script>

<style scoped>
h3{
  text-align: center;
  color: #4a3524;
  font-family: "DM Sans", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  border-color: transparent;
  border-radius: 15px;
  font-size: 25px;
}
.price{
  align-items: center;
  border:10px #af9480 solid;
  background-color: #f0dfcc;
  border-radius: 13px;
  margin-left: 20%;
  padding: 0.5;
}
</style>
