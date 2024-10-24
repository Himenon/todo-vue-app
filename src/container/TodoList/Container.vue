<template>
  <WidgetsTodoList v-bind="todoListProps" />
</template>

<script setup lang="ts">
import { useGenerateProps } from './useGenerateProps';
import * as Widgets from '../../presentation/widgets';

// Propsの型定義
type TodoListContainerProps = {};

// Propsの受け取り
const props = defineProps<TodoListContainerProps>();

// todoListPropsの生成
const todoListProps = useGenerateProps(props);
</script>