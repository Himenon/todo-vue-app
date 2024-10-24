<template>
  <!-- propsの利用が想定されるコンポーネント内で利用 -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTodoListStore } from './store';

// Widgets.TodoListPropsの型定義
type TodoListProps = {
  items: {
    title: string;
    removeButton: {
      onClick: () => void;
    };
  }[];
  addTodoForm: {
    onSubmit: (fields: { title: string }) => void;
  };
};

// useGenerateProps関数
const useGenerateProps = () => {
  const todoListStore = useTodoListStore();
  const todoItems = computed(() => todoListStore.todoItems);

  const addTodoForm = {
    onSubmit: (fields: { title: string }) => {
      todoListStore.addTodo({
        id: crypto.randomUUID(),
        title: fields.title,
      });
    },
  };

  const items = computed(() =>
    todoItems.value.map((todoItem) => ({
      title: todoItem.title,
      removeButton: {
        onClick: () => todoListStore.removeTodo(todoItem.id),
      },
    }))
  );

  return {
    addTodoForm,
    items,
  } as TodoListProps;
};

const props = useGenerateProps();
</script>
