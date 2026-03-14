<script setup lang="tsx">
import { useTodoListStore } from '@/stores/ToDoList';
const { todolist, toggleClickedItem } = useTodoListStore();
</script>

<template>
    <ul>  
        <li
            v-for="item in todolist"
            @click="toggleClickedItem(item)"
            :class="{
            lowpriority: item.priority === 'low',
            mediumpriority: item.priority === 'medium',
            highpriority: item.priority === 'high',
            strikeout: item.done
            }"
        >
            {{ item.title }} - [{{ item.priority }} priority] 
        </li>
    </ul>
</template>
