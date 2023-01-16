
import { createStore } from "vuex";

import state from "./Store/state";
import * as getters from './Store/getters';
import * as mutations from './Store/mutations';
import * as actions from './Store/actions';


const Store = createStore({
  state,
  getters,
  mutations,
  actions,
})
export default Store