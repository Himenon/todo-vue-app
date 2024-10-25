
<script setup lang="ts">
import { defineProps, type Ref, unref } from 'vue';
import AddTodoForm, { type AddTodoFormProps } from './AddTodoForm.vue';
import TodoItem, { type TodoItemProps } from './TodoItem.vue';

// Propsの型定義
export type TodoListProps = {
  count: number;
  items: TodoItemProps[];
  addTodoForm: AddTodoFormProps;
}

defineProps<TodoListProps>();

</script>

<template>
  <div>
    <h2>Todo List</h2>
    <div>Count : {{ count }}</div>
    <!-- <AddTodoForm v-bind="addTodoForm" /> -->
    <div>
      <TodoItem
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        v-bind="item"
      />
    </div>
  </div>
</template>
