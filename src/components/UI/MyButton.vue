<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style lang="scss" scoped>
  .btn {
  cursor: pointer;
  background: transparent;
  border-radius: 5px;
  padding: 10px;
  color: gray;
  border: 1px solid gray;
  transition: all .2s;
  &:hover {
    border: 1px solid black;
  }
}
</style>