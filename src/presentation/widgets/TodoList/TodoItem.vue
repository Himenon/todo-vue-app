<script setup lang="ts">
import { defineProps } from 'vue';

export type TodoItemProps = {
  title: string;
  removeButton: Pick<HTMLButtonElement, 'onclick'>;
};

defineProps<TodoItemProps>();
</script>

<template>
  <p>
    <strong>{{ title }}</strong>
    <button @click=[removeButton.onclick]>Remove</button>
  </p>
</template>
