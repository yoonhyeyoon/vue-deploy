<template>
  <div>
    <input type="text" @keyup.enter="createTodo" v-model.trim="todoContent">
    <button @click="createTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function () {
    return {
      todoContent: null
    }
  },
  methods: {
    createTodo: function () {
      const todoItem = {
        content: this.todoContent,
        isCompleted: false
      }
      if (todoItem.content) {
        this.$store.dispatch('createTodo', todoItem)
        this.todoContent = null
      } else {
        alert('할 일을 입력해주쇼')
      }
    }
  }
}
</script>

<style>

</style>