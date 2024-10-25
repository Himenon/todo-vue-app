<script setup lang="ts">
import { useGenerateProps } from './useGenerateProps.js';
import * as Widgets from '../../presentation/widgets';

type TodoListContainerProps = {};

const props = defineProps<TodoListContainerProps>();

const todoListProps = useGenerateProps(props);
</script>


<template>
  <Widgets.TodoList v-bind="todoListProps" />
</template>
