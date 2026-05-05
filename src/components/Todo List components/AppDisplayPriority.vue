<script setup lang="ts">
import { computed } from 'vue';

const { PriorityNumber } = defineProps({
    PriorityNumber: Number
})

const priorityText = computed(() => {
    console.log(PriorityNumber)
    switch (PriorityNumber) {
        case 1:
            return 'High'
    
        case 2:
            return 'Medium'
    
        default:
            return 'Low'
    }
})

</script>

<template>
    <p> - {{ priorityText }}</p>
</template>