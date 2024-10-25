<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { TodoListStore } from './store';
import TodoListContainer from './Container.vue';
import WidgetsLoading from '../../presentation/widgets/Loading/Loading.vue';

const initialized = TodoListStore.useInitialized()

onMounted(() => {
  const timeoutId = window.setTimeout(() => {
    TodoListStore.initialize();
  }, 1000);

  onBeforeUnmount(() => {
    window.clearTimeout(timeoutId);
    TodoListStore.clear();
  });
});
</script>

<template>
  <div>
    <WidgetsLoading v-if="!initialized" type="TEXT" />
    <TodoListContainer v-else />
  </div>
</template>
