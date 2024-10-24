<script setup lang="ts">
// Propsの型定義
type LoadingProps = {
  type: 'TEXT';
};

// Propsの受け取り
const props = defineProps<LoadingProps>();
</script>

<template>
  <div>
    <p>Loading ...</p>
  </div>
</template>
