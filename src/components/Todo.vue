<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useTodoStore } from './todo.store'
import axios from "axios"
import List from './List.vue'
const state = useTodoStore()
const defaultFontFamily = "Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif";
const todoStore = useTodoStore();

const ModelInputTodo = ref('');
const tabs = ["All", "Active", "Completed"];
const activeTab = ref(tabs[0]);

const CreateTodo = async (title: string) => {
  if (!title) return alert("Please Input Todo");
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
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
    <div class="flex flex-col items-center font-sans">
      <div class="title mt-4">Todos</div> <!-- Add margin-top to the title -->

      <div class="w-full mt-4"> <!-- Add margin-top to the input container -->
        <div class="input-field-container">
          <font-awesome-icon icon="pencil-alt" class="pencil-icon" />
          <input
            @keyup.enter="CreateTodo(ModelInputTodo)"
            v-model="ModelInputTodo"
            placeholder="What Needs to be Done"
            class="text-[black] input-field"
          />
        </div>
      </div>

      <!-- Create a separate container for the item info, tabs, and clearComp -->
      <div class="items-container flex justify-between mt-4">
        <div class="item-info flex-1">{{ state.AllTodoLength }} Item left</div>
        <div class="tabs-container flex-1 flex gap-[24px] justify-center">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      @click="activeTab = tab"
      :class="{ active: activeTab === tab }"
      class="tab-button"
    >
      {{ tab }}
    </div>
  </div>
        <div class="clearComp cursor-pointer flex-1" @click="state.clearTodo">Clear Completed</div>
      </div>


    <div
    v-if="activeTab == 'All'"
    class="tab-content-item"
  >
    <div v-if="state.loading">Please Wait ...</div>
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
</template>

<!-- ... rest of your script and style sections ... -->


<style scoped>
.active {
  color: #fff;
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
  font-weight: normal; /* Set font weight to normal */
  font-family: Arial, sans-serif;
}

.input-field {
  font-size: 20px;
  height: 50px;
  width: 100%;
  padding: 20px;
  font-family: var(--defaultFontFamily); /* Use the defined font family */
  padding-left: 45px;
}


.tab-button {
  padding: 10px 20px;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 5px; /* Add rounded border */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.tab-button.active {
  border-color: white;
}

.tab-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.item-info,
.clearComp {
  display: flex;
  align-items: center;
  gap: 10px; /* Adjust the gap between items */
}
.items-container {
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 90px; /* Adjust the gap between items */
}

/* Adjust the flex alignment and spacing for the tabs container */
.tabs-container {
  display: flex;
  align-items: center;
  gap: 50px; /* Adjust the gap between tabs */
}
.item-info {
  font-size: 16px;
  color: #ffffff;
}
.input-field-container {
  position: relative;
}

.pencil-icon {
  position: absolute;
  left: 20px; /* Adjust the left positioning as needed */
  top: 50%; /* Vertically center the icon */
  transform: translateY(-50%);
  color: gray; /* Set the color of the pencil icon */
  pointer-events: none; /* Make the icon non-clickable */
}
</style>
