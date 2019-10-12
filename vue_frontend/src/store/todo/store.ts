import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import * as MUTATION from '@/store/todo/mutation-types';
import ApiService from '@/services/api.service';
import axios from 'axios';

@Module({ name: 'todo' })
export default class TodoStore extends VuexModule {
  public todoList: [] = [];

  @Action({ rawError: true })
  public async getTodos() {
    await axios
      .get('http://localhost:8000/api/todos/')
      .then((response) => {
        console.log(response);
        this.context.commit(MUTATION.GET_TODOS, response.data);
      })
      .catch((response) => console.log(response));
  }

  @Mutation
  public [MUTATION.GET_TODOS](payload: []) {
    this.todoList = payload;
  }
}
