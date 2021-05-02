const storage = {
  fetch() {
    const todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    return todos;
  },
};
const state = {
  todoItems: storage.fetch(),
};

const getters = {
  getTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addItem(state, newItemContent) {
    state.todoItems = [
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
};

export default {
  state,
  getters,
  mutations,
};
