<template>
  <div class="container">
    <div class="app">
      <img class="panda-img" src="./assets/panda.png" alt="">
      <h1 class="app-title">Todanda</h1>
      <todo-form @create="addTodo"></todo-form>
      <todos-active v-model="todos.active"
        :todos="todos" 
        @remove="removeTodo" 
        @done="doneTodo" 
        :isActive="isActive"></todos-active
        >
      <todos-complited 
        :todos="todos" 
        @remove="removeTodo" 
        @restore="restoreTodo" 
        :isActive="isActive"></todos-complited
        >
    </div>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm';
import TodosActive from '@/components/TodosActive';
import TodosComplited from '@/components/TodosComplited';


export default {
  name: 'App',
  components: {
    TodosActive,
    TodosComplited,
    TodoForm
  },
  data() {
    return {
      todos: {
        active: [
          { id: 1, title: 'Add your first todo'},
          { id: 2, title: 'Get happy'},
        ],
        complited: [
          { id: 3, title: 'Open the Todanda :)'},
        ]
      },
      isActive: true,
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.active.push(todo);
      this.todoStorage();
    },
    removeTodo(todo) {
      this.todos.active = this.todos.active.filter(p => p.id !== todo.id);
      this.todos.complited = this.todos.complited.filter(p => p.id !== todo.id);
      this.todoStorage();
    },
    doneTodo(todo) {
      this.todos.active = this.todos.active.filter(p => p.id !== todo.id);
      this.todos.complited.push(todo);
      this.todoStorage();
    },
    restoreTodo(todo) {
      this.todos.complited = this.todos.complited.filter(p => p.id !== todo.id);
      this.todos.active.push(todo);
      this.todoStorage();
    },
    todoStorage() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
  },
  created() {
    // let's create some script for 100vh problems
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // also apply this to resizes
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
  mounted() {
    if (localStorage.todos) {
      const newTodos = JSON.parse(localStorage.todos);
      this.todos = newTodos;
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
}

::-webkit-scrollbar {
  display: none;
}

body {
  background: rgba(85, 104, 50, 0.5);
}

.container {
  padding: 0 20px;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  width: 100%;
  overflow: scroll;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  padding: 5px 30px;
  border-radius: 16px;
  background-color: #fafafa;
  max-width: 590px;
  height: 90%;
  margin: 0 auto;
  text-align: center;
  &-title {
    margin-bottom: 30px;
  }
}

.panda-img {
  max-width: 200px;
}
</style>
