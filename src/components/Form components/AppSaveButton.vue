<script setup lang="ts">
import { useTodoTextStore } from '@/stores/ToDoString';
const TextStore = useTodoTextStore();
</script>

<template>
    <button class="btn btn-primary" v-bind:disabled="TextStore.title.length < 3">
        Save item
    </button>
</template>