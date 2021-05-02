<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoFooter from "./components/TodoFooter.vue";
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['todoItems']),
  },
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter
  },
  watch: {
    todoItems(val) {
      localStorage.setItem("todos", JSON.stringify(val));
    },
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}

input {
  border-style: groove;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
