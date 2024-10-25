import { computed } from "vue";
import { TodoListStore } from "./store";
import type { Widgets } from "../../presentation";

export type GenerateTodoListPropsArgs = {};

export const useGenerateProps = (
  _props: GenerateTodoListPropsArgs
): Widgets.TodoListProps => {
  const todoItems = TodoListStore.useTodoItems();
  const addTodoForm: Widgets.TodoListProps["addTodoForm"] = {
    onSubmit: (fields) => {
      TodoListStore.addTodo({
        id: crypto.randomUUID(),
        title: fields.title,
      });
    },
  };

  const items = todoItems.value.map(
    (todoItem): Widgets.TodoListProps["items"][0] => ({
      title: todoItem.title,
      removeButton: {
        onClick: () => {
          console.log(`Remove Target: ${todoItem.id}`);
          TodoListStore.removeTodo(todoItem.id);
        },
      },
    })
  );

  return {
    addTodoForm,
    items,
  };
};
