<template>
  <div class="todo-item" v-for="todo in todos" :key="todo.id">
    <div class="todo-content">
      <input
        type="checkbox"
        v-model="todo.completed"
        @click="state.addTodo(Number(todo.id))"
        class="w-[20px] h-[20px] mr-2"
      />
      <p :class="['todo-title', {'done': todo.completed}]">{{ todo.title }}</p>
    </div>
    <span
      class="delete-button text-xl cursor-pointer"
      @click="state.deleteTodo(Number(todo.id))"
    >
      <font-awesome-icon :icon="trashIcon" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from './todo.store'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const state = useTodoStore()
const isHovering = ref(false);

interface TTodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

defineProps({
  todos: {
    type: Array as () => TTodo[],
    required: true
  }
})

// Register the font awesome icon
const trashIcon = faTrash
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4b4a4a;
  padding: 25px; 
  margin: 10px 0; 
  border-radius: 10px;
  position: relative; /* Add relative positioning to the todo item */
}

.todo-content {
  display: flex;
  align-items: center;
}

.todo-title {
  flex: 1;
  margin: 0;
  margin-left: 8px;
  padding: 0;
  font-size: 16px;
  font-family: Arial, sans-serif;
}

.done {
  text-decoration: line-through;
}

.delete-button {
  position: absolute; /* Position the trash icon absolutely within the todo item */
  top: 50%; /* Center the icon vertically */
  right: 20px; /* Adjusted position to have more margin from the corner */
  transform: translateY(-50%); /* Adjust for vertical centering */
  transition: opacity 0.3s; /* Add transition for smooth opacity change */
  opacity: 0; /* Initially hide the icon */
}

.todo-item:hover .delete-button {
  opacity: 1; /* Show the icon when hovering over the todo item */
}

.delete-button:hover {
  color: red; /* Change the color to red when hovering */
}
</style>
