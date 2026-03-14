import { defineStore } from "pinia";
import { ref } from "vue";


// TodoText Store 
export const useTodoTextStore = defineStore('todostring', {
    state: () => ({
        priority: ref('medium'),
        title: ref('')
    }),
    getters: { },
    actions: {
        resetTextStore() {
            this.priority = "medium";
            this.title = "";
        },
    }
});