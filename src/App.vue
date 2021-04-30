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

export default {
  // data() {
  //   return {
  //     todos: []
  //   };
  // },
  // vuex 적용
  // created() {
  //   this.todos = localStorage.getItem("todos")
  //     ? JSON.parse(localStorage.getItem("todos"))
  //     : [];
  // },
  computed: {
    getStoreTodoItems() {
      return this.$store.state.todoItems;
    },
  },
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter
  },
  methods: {
    // addTodoHandler(toBeAddedItemContent) {
      // this.todos = [
      //   ...this.todos,
      //   { content: toBeAddedItemContent, complete: false }
      // ];
    // },
    // removeTodoHandler(toBeDeletedIndex) {
      // const newTodos = this.todos.filter(
      //   (item, index) => index !== toBeDeletedIndex
      // );
      // this.todos = newTodos;
    // },
    // toggleCompleteHandler(toBeToggledIndex) {
      // const renewTodos = this.todos.map((item, index) => {
      //   if (index === toBeToggledIndex) {
      //     item.complete = !item.complete;
      //   }

      //   return item;
      // });

      // this.todos = renewTodos;
    // },
    // clearHandler() {
      // this.todos = [];
    // }
  },
  watch: {
    // todos() {
    //   // localStorage 저장
    //   localStorage.setItem("todos", JSON.stringify(this.todos));
    // },
    getStoreTodoItems(val) {
      localStorage.setItem("todos", JSON.stringify(val));
    }
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
