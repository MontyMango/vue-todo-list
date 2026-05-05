<script setup lang="ts">
import type { ListItem } from '../../../types';
const { listItem } = defineProps<{
    listItem: ListItem
}>()
</script>

<template> 
    <p>{{ listItem.title }}</p>
</template>