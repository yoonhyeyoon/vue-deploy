<template>
  <div>
    <span @click="updateTodo(todo)" :class="{ 'is-complete' : todo.isCompleted }">{{ todo.content }}</span>
    <button @click="deleteTodo(todo)">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions([
      'updateTodo',
      'deleteTodo'
    ])
    // updateTodo: function () {
    //   this.$store.dispatch('updateTodo', this.todo)
    // },
    // deleteTodo: function () {
    //   this.$store.dispatch('deleteTodo', this.todo)
    // }
  }
}
</script>

<style>
  .is-complete {
    text-decoration: line-through;
}
</style>