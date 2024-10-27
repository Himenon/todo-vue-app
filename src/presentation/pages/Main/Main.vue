<script setup lang="ts">
import { defineProps } from 'vue';

export type MainPageProps = {};

defineProps<MainPageProps>();
</script>

<template>
  <section class="todoapp">

    <header class="header">
      <h1>Todos</h1>
      <slot name="HeadingContent"></slot>
    </header>

    <section class="main">

    </section>

    <footer class="footer">
    </footer>
  </section>
</template>

<style>
@import "https://unpkg.com/todomvc-app-css@2.4.1/index.css";
</style>
