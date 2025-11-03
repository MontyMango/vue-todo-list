<script setup>
  import { reactive } from 'vue';

  const title = "My first todo list";
  const newTodoItem = reactive({
    title: '',
    priority: 'medium', 
    done: false
  });
  const todolist = reactive([
      {id: 1, title: "Run for 15 minutes", priority: "medium", done: false},
      {id: 2, title: "Cook a snack", priority: "low", done: false},
      {id: 3, title: "Find a pet frog", priority: "high", done: false},
      {id: 4, title: "Pet the pet frog", priority: "high", done: false}
  ]);
  let todoCount = todolist.length;
  let tasksFinished = 0;  // No tasks are done initially
  
  const saveItemTotodolist = () =>  {
    todolist.push({
      id: todolist.length + 1, 
      title: newTodoItem.title || 'Item', 
      priority: newTodoItem.priority || "low",
      done: false
    });

    // Make priority default and clear the textbox
    newTodoItem.title = '';
    newTodoItem.priority = 'medium';
    todoCount = todolist.length;
    tasksFinished = todolist.filter(x => (x.done === true)).length;
  }

  const toggleClickedItem = (item) => {
    item.done = !item.done;
    tasksFinished = todolist.filter(x => (x.done === true)).length;
  }

</script>

<template>
  <img alt="A list with " class="logo" src="./assets/list.svg" width="45" height="45" />
  <h1 class="title"> {{ title }} </h1>
  <p class="taskstatus"> {{ tasksFinished }} / {{ todoCount }} task(s) finished</p>

  <form class="add-item-form" @submit.prevent="saveItemTotodolist">
    <input v-model="newTodoItem.title" type="text" placeholder="Add an item here"></input>

    <label>
      Priority:
      <select v-model="newTodoItem.priority" >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </label>

    <button class="btn btn-primary" v-bind:disabled="newTodoItem.title.length < 3">
        Save item
    </button>
  </form>

  <ul>  
    <li
      v-for="item in todolist"
      @click="toggleClickedItem(item)"
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

</template>