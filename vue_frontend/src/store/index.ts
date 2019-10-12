import Vue from 'vue';
import Vuex from 'vuex';

import todo from './todo/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
  },
});
