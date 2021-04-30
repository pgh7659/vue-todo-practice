import Vue from "vue";
import Vuex from "vuex";

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
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addItem(state, newItemContent) {
      this.state.todoItems = [
        ...state.todoItems,
        { content: newItemContent, complete: false },
      ];
    },
    removeItem(state, toBeDeletedIndex) {
      state.todoItems = state.todoItems.filter(
        (item, index) => index !== toBeDeletedIndex
      );
    },
    toggleItem(state, toBeToggledIndex) {
      state.todoItems.map((item, index) => {
        if (index === toBeToggledIndex) {
          item.complete = !item.complete;
        }
      });
    },
    clean(state) {
      state.todoItems = [];
    },
  },
});
