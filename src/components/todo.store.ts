// src/components/todo.store.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export type TTodo = {
  id: Number
  title: String
  userId: Number
  completed: Boolean
}

export const useTodoStore = defineStore('todo', {
  state: (): {
    todos: TTodo[];
    loading: boolean;
  } => ({
    todos: [],
    loading: false,
  }),

  getters: {
    CompletedTodo(): TTodo[] {
      return this.todos.filter((item: any) => item.completed === true)
    },
    ActiveTodo(): TTodo[] {
      return this.todos.filter((item: any) => item.completed === false)
    },
    AllTodo(): TTodo[] {
      return this.todos
    },
    AllTodoLength(): number {
      return this.todos.filter((item: any) => item.completed === false).length
    }
  },

  actions: {
    async fetchTodoList() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        )

        this.todos = response.data.slice(0, 5);
      } catch (_) {
        //
      }
    },
    // Implement other actions like addTodo, updateTodoStatus, deleteTodo, etc.
    async addTodo(id: number) {
      const index = this.todos.findIndex((item) => item.id === id)
      this.todos[index].completed = !this.todos[index].completed
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          title: this.todos[index].title,
          completed: this.todos[index].completed,
          userId: 1,
          id
        })
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTodo(id: number): Promise<void> {
      try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        if (response.status === 200) {
          this.todos = this.todos.filter((item) => item.id !== id)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async clearTodo(): Promise<void> {
      this.loading = true; // Set loading to true before deletion
      await Promise.all(
        this.CompletedTodo.map(async (item) => {
          await this.deleteTodo(Number(item.id));
        })
      );
      this.loading = false;
  }
},
})
