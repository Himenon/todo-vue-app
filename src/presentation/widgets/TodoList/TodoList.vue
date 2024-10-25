
<script setup lang="ts">
import { defineProps } from 'vue';
import AddTodoForm, { type AddTodoFormProps } from './AddTodoForm.vue';
import TodoItem, { type TodoItemProps } from './TodoItem.vue';

// Propsの型定義
export type TodoListProps = {
  items: TodoItemProps[];
  addTodoForm: AddTodoFormProps;
};

const props = defineProps<TodoListProps>();
</script>

<template>
  <div>
    <h2>Todo List</h2>
    <AddTodoForm v-bind="addTodoForm" />
    <div>
      <TodoItem
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        v-bind="item"
      />
    </div>
  </div>
</template>
