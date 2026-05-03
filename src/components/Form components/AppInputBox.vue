<script setup lang="ts">
import { useTodoTextStore } from '@/stores/ToDoString';
const TextStore = useTodoTextStore();
</script>


<template>
    <div>
        <p class="font-bold">Task to input</p>
        <input size="30" type="text" v-model="TextStore.title" placeholder="Add an item here" class="input" />
    </div>
</template>

