import { computed } from "vue";
import { state } from "./State";

// 初期化チェック用関数
export const useInitialized = () => {
  return computed(() => state.todoItems !== null);
};

// Todoアイテム取得関数
export const useTodoItems = () => {
  return computed(() => {
    if (state.todoItems === null) {
      throw new Error("初期化してください");
    }
    return [...state.todoItems.values()];
  });
};
