import { createStore } from 'vuex'
import axios from 'axios';
const nodeEOMPURL = 'https://capstone-final-projec.herokuapp.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
  },
  actions: {
    getProducts : async (context) => {
      let res = await axios.get(nodeEOMPURL+"products");
      let {results} = res.data;
      if (results) {
        context.commit('setProducts', results)
      }
    },
    login: async (context, payload)=> {
      const {email, password} = payload;
    }
  },
  modules: {
  }
})
