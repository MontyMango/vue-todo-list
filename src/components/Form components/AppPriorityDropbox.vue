<script setup lang="tsx">
import { useTodoTextStore } from '@/stores/ToDoString';
const TextStore = useTodoTextStore();
</script>

<template>
    <label>
      Priority:
      <select v-model="TextStore.priority" >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </label>
</template>