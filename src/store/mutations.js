const addItem = (state, newItemContent) => {
  state.todoItems = [
    ...state.todoItems,
    { content: newItemContent, complete: false },
  ];
};

const removeItem = (state, toBeDeletedIndex) => {
  state.todoItems = state.todoItems.filter(
    (item, index) => index !== toBeDeletedIndex
  );
};

const toggleItem = (state, toBeToggledIndex) => {
  state.todoItems.map((item, index) => {
    if (index === toBeToggledIndex) {
      item.complete = !item.complete;
    }
  });
};

const clean = (state) => {
  state.todoItems = [];
};

export { addItem, removeItem, toggleItem, clean };
