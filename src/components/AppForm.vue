<script setup lang="tsx">
import { useTodoListStore } from '@/stores/ToDoList';
import { useTodoTextStore } from '@/stores/ToDoString';
import AppInputBox from './Form components/AppInputBox.vue';
import AppPriorityDropbox from './Form components/AppPriorityDropbox.vue';
import AppSaveButton from './Form components/AppSaveButton.vue';

const TodoListStore = useTodoListStore()
const TextStore = useTodoTextStore()

const saveItem = () => {
    // Save the item to the todo list
    // Priority is set as 
    TodoListStore.saveItemTotodolist(TextStore.title, +TextStore.priority);

    // Reset the store
    TextStore.resetTextStore();
}

</script>

<template>
    <form class="add-item-form" @submit.prevent="saveItem">
        <div class="flex md:flex-row flex-col gap-4 items-center">
            <AppInputBox></AppInputBox>
            <div class="flex flex-row md:gap-4 gap-8 items-end">
                <AppPriorityDropbox></AppPriorityDropbox>
                <AppSaveButton></AppSaveButton> 
            </div>
        </div>
  </form>
</template>