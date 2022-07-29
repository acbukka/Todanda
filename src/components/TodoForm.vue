<template>
  <form class="form" @submit.prevent>
    <h2 class="form-title">Add task:</h2>
    <div class="form-wrapper">
      <my-input class="add-input" 
        v-model="todo.title" 
        type="text" 
        placeholder="New task">
      </my-input>
      <my-button 
        class="form-btn" 
        @click="addTodo">
        <img class="plus-img" src="../assets/plus.png" alt="">
      </my-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: "",
      }
    };
  },
  methods: {
    addTodo() {
      this.todo.id = Date.now();
      this.$emit("create", this.todo);
      this.todo = {
        title: "",
      };
    }
  },
}
</script>

<style lang="scss" scoped>

.form {
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-bottom: 30px;
  &-wrapper {
    display: flex;
  }
  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px; 
    align-self: flex-end;
  }
}

.add-input {
  margin-right: 5px;
}
.plus-img {
  width: 16px;
}

</style>
