<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.complete}" v-on:click="toggleComplete(index)"></i>
        <span v-bind:class="{textCompleted: todoItem.complete}">{{todoItem.content}}</span>
        <span class="removeBtn" v-on:click="removeTodo(index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo: function(toBeDeletedIndex) {
      this.$emit('removeTodo', toBeDeletedIndex)
    },
    toggleComplete: function(toBeToggledIndex) {
      this.$emit('toggleComplete', toBeToggledIndex);
    }
  },
  watch: {
    propsdata: function() {
      console.log(this.propsdata);
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: center;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
</style>