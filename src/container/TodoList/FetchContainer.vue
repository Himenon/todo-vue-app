<template>
  <div>
    <WidgetsLoading v-if="!initialized" type="TEXT" />
    <TodoListContainer v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useTodoListStore } from './store';
import TodoListContainer from './Container.vue';
import WidgetsLoading from '../../presentation/WidgetsLoading.vue';

const todoListStore = useTodoListStore();
const initialized = ref(todoListStore.initialized);

// コンポーネントのマウント時の処理
onMounted(() => {
  const timeoutId = window.setTimeout(() => {
    todoListStore.initialize();
  }, 1000);

  // クリーンアップ処理
  onBeforeUnmount(() => {
    window.clearTimeout(timeoutId);
    todoListStore.clear();
  });
});
</script>