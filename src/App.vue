<script setup lang="tsx">
import { ref } from 'vue';
import TodoList from './components/TodoList.vue';
import AppForm from './components/AppForm.vue';
import AppTitle from './components/AppTitle.vue';
import AppTasksFinished from './components/Stats components/AppTasksFinished.vue';
import { useDark } from '@vueuse/core';
const isDark = useDark()
</script>

<template>
    <header>
        <AppTitle></AppTitle>
    </header>

    <body >
        <div
            class="flex items-center justify-center h-full w-full"
            :class="isDark ? ' bg-gray-900' : 'bg-white'"
        >
            <div 
                class="flex flex-col border-8 rounded-4xl shadow-2xl w-[55%] h-[45%] gap-8 items-center justify-center px-8 py-4"
                :class="isDark ? 'bg-gray-600 border-gray-500 shadow-gray-700' : 'bg-gray-200 border-gray-300 shadow-gray-400'"    
            >
                <AppForm></AppForm>
                <TodoList></TodoList>
                <AppTasksFinished></AppTasksFinished>
            </div>
        </div>
    </body>
</template>

<style lang="css">
body    {
    background: #effffc;
    height: 95vh;
    width: 100vw;
    
    /* Fonts */
    font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
</style>