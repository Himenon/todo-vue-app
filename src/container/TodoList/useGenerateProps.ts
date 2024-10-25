import { computed } from "vue";
import { TodoListStore } from "./store";
import type { Widgets } from "../../presentation";

export const useGenerateProps = (): Widgets.TodoListProps => {
  const todoItems = TodoListStore.useTodoItems();

  const addTodoForm = {
    onSubmit: (fields: { title: string }) => {
      TodoListStore.addTodo({
        id: crypto.randomUUID(),
        title: fields.title,
      });
    },
  };

  const items = computed(() => {
    return todoItems.value.map(
      (todoItem): Widgets.TodoListProps["items"][0] => ({
        title: todoItem.title,
        removeButton: {
          onclick: () => {
            TodoListStore.removeTodo(todoItem.id);
          },
        },
      })
    );
  });

  return {
    addTodoForm,
    items: items.value,
  };
};
