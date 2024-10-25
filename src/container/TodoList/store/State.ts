import { reactive } from "vue";
import type * as Types from "./types";

// Vue用のstate
export const state = reactive<Types.State>({
  todoItems: null,
  counter: 0,
});
