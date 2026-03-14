<script setup lang="tsx">
import { ref } from 'vue';
import TodoList from './components/TodoList.vue';
import AppForm from './components/AppForm.vue';
import AppHeader from './components/AppHeader.vue';

const title = ref('My First Todo List');
</script>

<template>
<AppHeader :title="title"></AppHeader>
<AppForm></AppForm>
<TodoList></TodoList>
</template>