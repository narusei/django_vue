<template>
  <div class="home">
    <b-todo-page :todoList="todos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import BTodoPage from "../components/todo/BTodoPage"; // @ is an alias to /src

import { getModule } from "vuex-module-decorators";
import TodoStore from "../store/todo/store";

@Component({
  components: {
    BTodoPage
  }
})
export default class Home extends Vue {
  private todoStore = getModule(TodoStore, this.$store);

  get todos() {
    return this.todoStore.todoList;
  }

  created() {
    this.todoStore.getTodos();
  }
}
</script>
