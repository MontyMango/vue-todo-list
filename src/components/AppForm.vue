<script setup lang="tsx">
import AppPriorityDropbox from './Form components/AppPriorityDropbox.vue';
import { useTodoListStore } from '@/stores/ToDoList';
import { useTodoTextStore } from '@/stores/ToDoString';
import AppInputBox from './Form components/AppInputBox.vue';
import AppSaveButton from './Form components/AppSaveButton.vue';

const TodoListStore = useTodoListStore()
const TextStore = useTodoTextStore()

const saveItem = () => {
    // Save the item to the todo list
    TodoListStore.saveItemTotodolist(TextStore.title, TextStore.priority);

    // Reset the store
    TextStore.resetTextStore();
}

</script>

<template>
    <form class="add-item-form" @submit.prevent="saveItem">
        <div class="flex flex-row gap-16 items-end">
            <AppInputBox></AppInputBox>
            <AppPriorityDropbox></AppPriorityDropbox>
            <AppSaveButton></AppSaveButton>
        </div>
  </form>
</template>