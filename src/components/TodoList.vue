<template>
  <div>
    <h1>Todo List</h1>
    <h3>All Todos: {{ allTodosCount }}</h3>
    <h3>Completed Todo: {{ completedTodosCount }}</h3>
    <h3>Uncompleted Todo: {{ uncompletedTodosCount }}</h3>
    <todo-list-item
      v-for="(todo, idx) in todoList"
      :key="idx"
      :todo="todo"
    > </todo-list-item>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  computed: {
    ...mapState([
      'todoList'
    ]),
    // todos: function () {
    //   return this.$store.state.todoList
    // },

    ...mapGetters([
      'allTodosCount',
      'completedTodosCount',
      'uncompletedTodosCount',
    ])
    // allTodosCount: function () {
    //   return this.$store.getters.allTodosCount
    // },
    // completedTodosCount: function () {
    //   return this.$store.getters.completedTodosCount
    // },
    // uncompletedTodosCount: function () {
    //   return this.$store.getters.uncompletedTodosCount
    // }
  }
}
</script>

<style>

</style>