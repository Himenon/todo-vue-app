<script setup lang="ts">
import { useGenerateProps, type GenerateTodoListPropsArgs } from './useGenerateProps.js';
import * as Widgets from '../../presentation/widgets';

export type TodoListContainerProps = GenerateTodoListPropsArgs;

const props = defineProps<TodoListContainerProps>();

const todoListProps = useGenerateProps(props);
</script>

<template>
  <Widgets.TodoList v-bind="todoListProps" />
</template>
