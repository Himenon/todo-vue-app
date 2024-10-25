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

  const items = todoItems.map((todoItem) => ({
    title: todoItem.title,
    removeButton: {
      onClick: () => {
        TodoListStore.removeTodo(todoItem.id);
      },
    },
  }));

  const count = TodoListStore.useCount();

  return {
    count,
    addTodoForm,
    items,
  };
};
