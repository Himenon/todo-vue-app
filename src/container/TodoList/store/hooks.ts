import { computed } from "vue";
import { state } from "./State";

export const useInitialized = () => {
  return computed(() => state.todoItems !== null);
};

export const useTodoItems = () => {
  if (state.todoItems === null) {
    throw new Error("初期化してください");
  }
  return [...state.todoItems.values()];
};

export const useCount = () => {
  return state.counter;
};
