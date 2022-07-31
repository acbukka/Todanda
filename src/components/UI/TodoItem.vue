<template>
  <div class="todo-item">
    <img class="todo-item__img" src="../../assets/panda.png" alt="">
    <slot></slot>
    <div class="post__btns">
      <my-button class="del-btn"
      @click="$emit('remove', todo)"
      >
      <img class="del-img" src="../../assets/del.png" alt="Remove task">
      </my-button>
      <my-button v-if="isActive" class="done-btn"
      @click="$emit('done', todo)"
      >
      <img class="done-img" src="../../assets/done.png" alt="Done task">
      </my-button>
      <my-button v-if="!isActive" class="restore-btn"
      @click="$emit('restore', todo)"
      >
      <img class="restore-img" src="../../assets/restore.svg" alt="Done task">
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    todo: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-item {
  position: relative;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px;
  margin-bottom: 7px;
  &__img {
    width: 25px;
    margin-right: 5px;
  }
  .del-btn {
    top: 4px;
    right: 4px;
    position: absolute;
    padding: 1px;
  }
  .done-btn {
    top: 4px;
    right: 31px;
    position: absolute;
    padding: 1px;
  }
  .restore-btn {
    top: 4px;
    right: 31px;
    position: absolute;
    padding: 3.4px;
  }
  .del-img {
    width: 20px;
  }
  .done-img {
    width: 21px;
  }
  .restore-img {
    width: 16px;
  }
}
</style>