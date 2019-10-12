<template>
  <div>
    <div>ToDoList</div>
    <div v-for="(todo, index) in todoList" :key="index">
      {{ todo.title }}
      {{ todo.content }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';

@Component
export default class BTodoPage extends Vue {
  @Prop()
  public todoList!: [];
}
</script>

<style lang="scss" scoped>
</style>