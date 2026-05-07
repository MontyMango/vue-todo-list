import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref } from 'vue';
import type { ListItem } from "../../types";

// TodoList Store
export const useTodoListStore = defineStore('todolist', () => {
  const todolist = useStorage(
    "todolist",
    [
      { id: 1, title: "Run for 15 minutes", priority: 2, done: false },
      { id: 2, title: "Cook a snack", priority: 3, done: false },
      { id: 3, title: "Find a pet frog", priority: 1, done: false },
      { id: 4, title: "Pet the pet frog", priority: 1, done: false },
    ],
    localStorage,
  );
  const newTodoItem = useStorage(
    "todoItem",
    {
      title: "",
      priority: 2,
      done: false,
    },
    localStorage,
  );
  const todoCount = useStorage("todoCount", ref(4), localStorage);
  const todoTasksFinished = ref(todolist.value.forEach((item) =>  {
    item.done == true
  }));

  function saveItemTotodolist(title: string, itemPriority: number)  {
    todolist.value.push({
      id: todoCount.value++,
      title: title || "Item",
      priority: itemPriority || 2,
      done: false,
    });
    
    // Make priority default and clear the textbox
    newTodoItem.value.title = "";
    newTodoItem.value.priority = 2;
  }

  function toggleClickedItem(item: ListItem)  {
      item.done = !item.done;
      todoTasksFinished.value = todolist.value.filter(
        (x) => x.done === true,
      ).length;
  }

  return {
    todolist,
    newTodoItem,
    todoCount,
    todoTasksFinished,
    saveItemTotodolist,
    toggleClickedItem
  };
})
