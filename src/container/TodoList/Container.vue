<script setup lang="ts">
import { useGenerateProps, type GenerateTodoListPropsArgs } from './useGenerateProps.js';
import * as Widgets from '../../presentation/widgets';
import { computed } from "vue";

export type TodoListContainerProps = GenerateTodoListPropsArgs;

const props = defineProps<TodoListContainerProps>();

const todoListProps = computed(() => useGenerateProps(props));
</script>

<template>
  <Widgets.TodoList v-bind="todoListProps" />
</template>



