<script setup lang="ts">
import { useGenerateProps, type GenerateTodoListPropsArgs } from './useGenerateProps.js';
import * as Widgets from '../../presentation/widgets';
import { TodoListStore } from "./store";
import { computed } from "vue";

export type TodoListContainerProps = GenerateTodoListPropsArgs;

const props = defineProps<TodoListContainerProps>();

const count  = TodoListStore.useCount();
const todoListProps = computed(() => useGenerateProps(props));
</script>

<template>
  <Widgets.TodoList v-bind="todoListProps" />
  <div>{{ count }}</div>
</template>
