import { state } from "./State";

export const useInitialized = () => {
  return state.todoItems !== null;
};

export const useTodoItems = () => {
  if (state.todoItems === null) {
    throw new Error("初期化してください");
  }
  return [...state.todoItems.values()];
};
