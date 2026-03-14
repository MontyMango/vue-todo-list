<script setup lang="tsx">
import AppPriorityDropbox from './Form components/AppPriorityDropbox.vue';
import { useTodoListStore } from '@/stores/ToDoList';
import { useTodoTextStore } from '@/stores/ToDoString';

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
    <input v-model="TextStore.title" type="text" placeholder="Add an item here"></input>

    <AppPriorityDropbox></AppPriorityDropbox>

    <button class="btn btn-primary" v-bind:disabled="TextStore.title.length < 3">
        Save item
    </button>
  </form>
</template>