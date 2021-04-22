<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoValue" v-on:keyup.enter="addTodo" />
    <span class="addContainer">
      <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>WARNING<i class="fas fa-times closeModalBtn" @click="showModal = false"></i></h3>
      </template>
      <template v-slot:body>
        <span>내용을 입력해주세요.</span>
      </template>
      <template v-slot:footer></template>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data: function() {
    return {
      newTodoValue: '',
      showModal: false,
    }
  },
  methods: {
    addTodo: function() {
      if(this.newTodoValue) {
        this.$emit('addTodo', this.newTodoValue);
        this.clearInput();
      } else {
        this.showModal = true;
      }
    },
    clearInput: function() {
      this.newTodoValue = '';
    }
  },
  components: {
    Modal: Modal,
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: #42b983;
    float: right;
  }
</style>