import { defineStore } from "pinia";
import { ref } from 'vue';

// TodoList Store
export const useTodoListStore = defineStore('todolist', 
  {
    state: () => ({
      /** @type {{ id: number, title: string, priority: string, done: boolean }} */
      todolist: [
        {id: 1, title: "Run for 15 minutes", priority: "medium", done: false},
        {id: 2, title: "Cook a snack", priority: "low", done: false},
        {id: 3, title: "Find a pet frog", priority: "high", done: false},
        {id: 4, title: "Pet the pet frog", priority: "high", done: false}
      ],

      /** @type {{ title: string, priority: string, done: boolean }} */
      newTodoItem: {
        title: '',
        priority: 'medium', 
        done: false
      },
      todoCount: ref(4),
      todoTasksFinished: ref(0)
  }),
  getters: {  },
  actions: {
    saveItemTotodolist(title: string, itemPriority: string) {
      this.todolist.push({
          id: this.todoCount++, 
          title: title || 'Item', 
          priority: itemPriority || "low",
          done: false
      });

      // Make priority default and clear the textbox
      this.newTodoItem.title = '';
      this.newTodoItem.priority = 'medium';
    },
    toggleClickedItem(item) {
      item.done = !item.done;
      this.todoTasksFinished = this.todolist.filter(x => (x.done === true)).length;
    }
  }
});