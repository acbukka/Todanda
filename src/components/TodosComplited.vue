<template>
  <div class="todo-list">
    <h2 class="todo-list__title">Complited:</h2>
    <ul>
      <li class="todo-item"
        v-for="todo in todos.complited" 
        :todo="todo" 
        :key="todo.id"
        >
        <img class="todo-item__img" src="../assets/panda.png" alt="">
        {{ todo.title }}
      </li>
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
  margin-top: 30px;
  text-align: start;
  &__title {
    margin-bottom: 10px;
  }
}
.todo-item {
  text-decoration: line-through;
  position: relative;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  margin-bottom: 7px;
  &__img {
    width: 25px;
    margin-right: 5px;
  }
  &::after {
    position: absolute;
    content: "";
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    // border: 1px solid rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
}
</style>