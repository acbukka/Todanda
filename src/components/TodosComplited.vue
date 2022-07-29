<template>
  <div class="todo-list">
    <h2 class="todo-list__title">Complited:</h2>
    <ul>
      <todo-item class="todo-item" 
        v-for="todo in todos.complited" 
        :todo="todo" 
        :key="todo.id"
        >
        {{ todo.title }}
      </todo-item>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.todo-list {
  margin-bottom: 30px;
  text-align: start;
  &__title {
    margin-bottom: 10px;
  }
}
.todo-item {
  text-decoration: line-through;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 2;
  }
}
</style>