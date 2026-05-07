<script setup lang="tsx">
import { useDark } from '@vueuse/core';
const isDark = useDark()

import { useTodoListStore } from '@/stores/ToDoList';
import AppListItem from './Todo List components/AppListItem.vue';
import AppDisplayPriority from './Todo List components/AppDisplayPriority.vue';
import { ref } from 'vue';
const { todolist, toggleClickedItem } = useTodoListStore();
</script>

<template>
  <div 
    class="max-h-[50%] overflow-scroll md:w-xl w-full h-max"
    :class="isDark ? 'bg-gray-300' : 'bg-gray-200'"
  >
    <ul>
      <li
        v-for="item in todolist"
        :key="item.id"
        @click="toggleClickedItem(item)"
        class="flex flex-row cursor-pointer items-center md:p-0.5 p-1 md:ml-0 ml-5 
          md:text-lg text-xl"
        :class="{
            lowpriority: item.priority === 3,
            mediumpriority: item.priority === 2,
            highpriority: item.priority === 1,
            strikeout: item.done
        }"
      >
        <AppListItem :listItem="item"></AppListItem>
        <AppDisplayPriority :PriorityNumber="item.priority"></AppDisplayPriority>
      </li>
    </ul>
  </div>
</template>


<style lang="css" scoped>
/* LOW PRIORITY */
.lowpriority {
  color: #727272;
  transition: color 1s ease;   
  transition: background-color 1s ease;    /* Fades from red to black*/
}
.lowpriority:hover {
  background-color: #c2f7ff54;
}

/* MEDIUM PRIORITY */
.mediumpriority {
  color: #254243;
  transition: color 0.5s ease;    /* Fades from red to black*/
  transition: background-color 1s ease;  /* Fades from gray to a lighter gray */
}
.mediumpriority:hover {
  color: #000000;
  background-color: rgba(82, 82, 82, 0.1);
}

/* HIGH PRIORITY */
.highpriority {
  color: #ff534d;
  transition: background-color 1s ease;    /* Fades from red to black */
}
.highpriority:hover {
  /* color: #2e0200; */
  background-color: #ff938f82;
}

/* STRIKEOUT */
.strikeout {
  text-decoration: line-through;
  color: #b8c2cc;
}
.strikeout:hover {
  color: #8795a1;
  background-color: #dedede1e;
}
.lowpriority.strikeout,
.mediumpriority.strikeout,
.highpriority.strikeout
 {
  color: #9a9a9a;
}
.lowpriority.strikeout:hover,
.mediumpriority.strikeout:hover,
.highpriority.strikeout:hover
 {
    color: #767676;
    background-color: #dddddd14;
}


</style>
