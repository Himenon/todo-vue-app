<script setup lang="ts">
import { type ButtonHTMLAttributes, defineProps } from 'vue';

export type TodoItemProps = {
  title: string;
  removeButton: Pick<ButtonHTMLAttributes, "onClick">;
};

defineProps<TodoItemProps>();
</script>

<template>
  <p>
    <strong>{{ title }}</strong>
    <button v-bind="removeButton">Remove</button>
  </p>
</template>
