<script setup lang="tsx">
import { useTodoTextStore } from '@/stores/ToDoString';
const TextStore = useTodoTextStore();
</script>

<template>
  <div class="flex flex-col">
    <p class="font-bold">Priority</p>
    <select class="select" v-model="TextStore.priority" >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>
</template>