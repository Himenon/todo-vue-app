<script setup lang="ts">
import { type ButtonHTMLAttributes, defineProps } from 'vue';

export type TodoItemProps = {
  title: string;
  removeButton: Pick<ButtonHTMLAttributes, "onClick">;
};

const props = defineProps<TodoItemProps>();
</script>

<template>
  <p>
    <strong>{{ title }}</strong>
    <button @click="removeButton.onClick">Remove</button>
  </p>
</template>
