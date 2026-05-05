import { defineStore } from "pinia";
import { ref } from "vue";


// TodoText Store 
export const useTodoTextStore = defineStore('todostring', {
    state: () => ({
        priority: ref(2),
        title: ref('')
    }),
    getters: { },
    actions: {
        resetTextStore() {
            this.priority = 2;
            this.title = "";
        },
    }
});