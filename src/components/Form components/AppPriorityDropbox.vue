<script setup lang="tsx">
import { useTodoTextStore } from '@/stores/ToDoString';
const TextStore = useTodoTextStore();
</script>

<template>
  <div class="flex flex-col">
    <p class="font-bold">Priority</p>
    <select class="select" v-model="TextStore.priority" >
      <option value=3>Low</option>
      <option value=2>Medium</option>
      <option value=1>High</option>
    </select>
  </div>
</template>