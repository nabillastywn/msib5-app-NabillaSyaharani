<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useTodoStore } from './todo.store'
import axios from "axios"
import List from './List.vue'
const state = useTodoStore()

const todoStore = useTodoStore();

const ModelInputTodo = ref('');
const tabs = ["All", "Active", "Completed"];
const activeTab = ref(tabs[0]);

const CreateTodo = async (title: string) => {
  if (!title) return alert("Please Input Todo");
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos?limit=5",
      {
        userId: 1,
        completed: false,
        title,
      }
    );

    if (response.status === 201) {
      ModelInputTodo.value = "";
      alert("Todo Created");
      todoStore.todos = [response.data, ...todoStore.todos];
    }
  } catch (error) {
    console.log(error);
  }
};

watch(() => todoStore.todos, (newTodos, oldTodos) => {
  console.log('Todos have changed:');
  console.log('New Todos:', newTodos);
  console.log('Old Todos:', oldTodos);
});

onMounted(() => {
  todoStore.fetchTodoList();
});
</script>

<template>
  <div class="main h-screen">
    <div class="flex flex-col items-center w-[100%] h-full font-sans">
      <div class="title">Todos</div>

      <div class="w-full">
        <input
          @keyup.enter="CreateTodo(ModelInputTodo)"
          v-model="ModelInputTodo"
          placeholder="What Needs to be Done"
          class="text-[black] input-field"
        />
      </div>

      
<div class="flex items-center justify-between mt-4">
    <div class="item-info">{{ state.AllTodoLength }} Item left</div>

      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = tab"
        :class="{ active: activeTab === tab }"
        class="tab-button"
      >
        {{ tab }}
      </div>
    <div @click="state.clearTodo" class="clearComp cursor-pointer">Clear Completed</div>
  </div>

    <div
    v-if="activeTab == 'All'"
    class="tab-content-item"
  >
    <div v-if="state.loading">Loading</div>
    <List v-else :todos="state.todos" />
  </div>
  
  <div
    v-if="activeTab === 'Active'"
    class="tab-content-item"
  >
    <List v-if="!state.loading" :todos="state.ActiveTodo" />
  </div>
  
  <div
    v-if="activeTab === 'Completed'"
    class="tab-content-item"
  >
    <List v-if="!state.loading" :todos="state.CompletedTodo" />
  </div>


  <!-- All, Active, and Completed Tabs -->




</div>
  </div>
</template>

<!-- ... rest of your script and style sections ... -->


<style scoped>
.active {
  color: #fff;
  background-color: rgb(83, 75, 75);
}
li {
  cursor: pointer;
  background-color: #1a1a1a;
  padding: 6px;
  width: fit-content;
  border-radius: 5px;
}
.clearComp {
  cursor: pointer;
  font-size: 14px;
}
.title {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 50px;
  font-family: Arial, sans-serif;
}

.input-field {
  font-size: 15px;
  height: 50px;
  width: 100%;
  padding: 15px;
  font-family: Arial, sans-serif;
}

.item-info {
  flex-grow: 1;
  font-family: Arial, sans-serif;
}
.tab-button {
  padding: 10px 20px;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  color: #ffffff;
  transition: background-color 0.3s, color 0.3s;
}

.tab-button.active {
  background-color: #1a1a1a;
  color: #ffffff;
}

.item-info {
  font-size: 16px;
  color: #ffffff;
}
</style>



  
        <!-- Rest of your code -->
      </div>
    </div>
  </template>
  
  <style scoped>
  /* ... Your other styles ... */
  
  /* Adjust the flex alignment and spacing for the items container */
  .items-container {
    display: flex;
    align-items: center;
    gap: 10px; /* Adjust the gap between items */
  }
  
  /* Adjust the flex alignment and spacing for the tabs container */
  .tabs-container {
    display: flex;
    align-items: center;
    gap: 24px; /* Adjust the gap between tabs */
  }
  </style>
  