<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed } from 'vue';
import { TodoListStore } from './store';
import TodoListContainer from './Container.vue';
import WidgetsLoading from '../../presentation/widgets/Loading/Loading.vue';

const initialized = computed(() => TodoListStore.useInitialized());

onMounted(() => {
  window.setTimeout(() => {
    TodoListStore.initialize();
  }, 0);
});

onBeforeUnmount(() => {
  TodoListStore.clear();
});
</script>

<template>
  <div>
    <WidgetsLoading v-if="!initialized" type="TEXT" />
    <TodoListContainer v-else />
  </div>
</template>
