
<script setup lang="ts">
import { defineProps } from 'vue';
import AddTodoForm from './AddTodoForm.vue';
import TodoItem from './TodoItem.vue';

// Propsの型定義
type TodoListProps = {
  items: { title: string; removeButton: { onClick: () => void } }[];
  addTodoForm: { onSubmit: (data: { title: string }) => void };
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
