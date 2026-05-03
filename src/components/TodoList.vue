<script setup lang="tsx">
import { useDark } from '@vueuse/core';
const isDark = useDark()

import { useTodoListStore } from '@/stores/ToDoList';
const { todolist, toggleClickedItem } = useTodoListStore();
</script>

<template>
  <div 
    class=" w-2xl max-h-[50%] overflow-scroll"
    :class="isDark ? 'bg-gray-300' : 'bg-gray-200'"
  >
    <ul>  
        <li
            v-for="item in todolist"
            @click="toggleClickedItem(item)"
            class="cursor-pointer text-lg p-0.5"
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
  </div>
</template>

<style lang="css" scoped>
/* LOW PRIORITY */
.lowpriority {
  color: #727272;
  transition: color 1s ease;    /* Fades from red to black*/
  transition: background-color 1s ease;    /* Fades from red to black*/
}
.lowpriority:hover {
  background-color: #c2f7ff54;
}
.lowpriority.strikeout {
  color: #9a9a9a;
}
.lowpriority.strikeout:hover {
    color: #767676;
    background-color: #dddddd14;
}

/* MEDIUM PRIORITY */
.mediumpriority {
  color: #254243;
  transition: color 0.5s ease;    /* Fades from red to black*/
  transition: background-color 1s ease;  /* Fades from red to black*/
}
.mediumpriority:hover {
  color: #000000;
  background-color: #e5e4e456;
  transition: color 0.5s ease;      /* Fades from red to black*/
}
.mediumpriority.strikeout {
  color: #9a9a9a;
}
.mediumpriority.strikeout:hover {
  color: #767676;
  background-color: #dddddd14;
}

/* HIGH PRIORITY */
.highpriority {
  color: #ff534d;
  transition: background-color 1s ease;    /* Fades from red to black*/
}
.highpriority:hover {
  /* color: #2e0200; */
  background-color: #ff938f82;
}
.highpriority.strikeout {
  color: #9a9a9a;
}
.highpriority.strikeout:hover {
  color: #767676;
  background-color: #dddddd14;
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

</style>
