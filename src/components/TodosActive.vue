<template>
  <div class="todo-list">
    <h2 class="todo-list__title">Active:</h2>
    <ul>
      <todo-item class="todo-item" 
        v-for="todo in todos.active" 
        :todo="todo" 
        :key="todo.id"
        @remove="$emit('remove', todo)" 
        @done="$emit('done', todo)"
        :isComplited="isComplited"
        >
        <p class="todo-title">{{ todo.title }}</p>
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
    },
    isComplited: {
      type: Boolean,
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

</style>