import { defineStore } from "pinia";
import { ref } from "vue";


// TodoText Store 
export const useTodoTextStore = defineStore('todostring', () => {
    const priority = ref(2);
    const title = ref('');

    function resetTextStore()   {
        priority.value = 2;
        title.value = '';
    }

    return {
        priority,
        title,
        resetTextStore
    }
});