import { reactive } from "vue";
import type * as Types from "./types";

export const state = reactive<Types.State>({
  todoItems: null,
});
