<script setup>
  import { reactive } from 'vue';

  const title = "My first todo list";
  const newTodoItem = reactive({
    title: '',
    priority: 'medium', 
    done: false
  });

  // const todoList = API.getTodoList(); // [
  /**
   * {id: 1, title: "Run for 15 minutes", priority: "medium", done: false},   
   * {id: 2, title: "Cook a snack", priority: "low", done: false},  
   * {id: 3, title: "Find a pet frog", priority: "high", done: false},
   *  {id: 4, title: "Pet the pet frog", priority: "high", done: false}]
   * */

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
  <!-- Iconfiy: https://iconify.design/ -->
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM11 6H6v5h5zm-1 4H7V7h3zm1 3H6v5h5zm-1 4H7v-3h3z"/></svg>  <h1 class="title"> {{ title }} </h1>
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