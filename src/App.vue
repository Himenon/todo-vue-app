<script setup>
import { ref } from 'vue'
const count = ref(0)
const rawHtml = `AAA: ${String(count)}`;
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
3
  Using text interpolation: <span : style="color: red">This should be red.</span>
  Using v-html directive: This should be red.
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
