<script setup lang="ts">
import { useTodoListStore } from '@/stores/ToDoList';
const TodoListStore = useTodoListStore()

import { useDark } from '@vueuse/core';
const isDark = useDark()
</script>

<template>
    <p class="border rounded-xl bg-gray-300 w-fit px-2 py-1"
        :class="isDark ? ' bg-gray-600' : 'bg-gray-50'"
    > 
        {{ TodoListStore.todoTasksFinished }} / {{ TodoListStore.todoCount }} task(s) finished
    </p>
</template>
