import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp";

Vue.use(Vuex);
const storage = {
  fetch() {
    const todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    return todos;
  },
};
export const store = new Vuex.Store({
  modules: {
    todoApp,
  },
});
