<template>
  <div class="todo-item">
    <img class="todo-item__img" src="../../assets/panda.png" alt="">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'todo-item'
  }
</script>

<style lang="scss" scoped>
  .todo-item {
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
}
</style>