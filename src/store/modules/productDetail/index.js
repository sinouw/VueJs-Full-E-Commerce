import {	products } from "./data";

const state = {
   products,
   selectedProduct: null
}

// getters
const getters = {
   products: state => {
		return state.products
   },
   selectedProduct: state => {
      return state.selectedProduct
   }
}
  
// actions 
const actions = {
	changeSelectedProduct(context, payload) {
		context.commit('selectProductHandler', payload);
   }
}
   
// mutations
const mutations = {  
	selectProductHandler(state, category) {
		state.selectedProduct = category;
   }
}

export default {
	state,
	getters,
	actions,
	mutations
}
