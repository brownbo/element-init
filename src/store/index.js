import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {   //初始化state
	arrived_customer:{
		rows:[],
		total:0,
	},
	order_customer:{
		or:[],
		total:0,
	},
	product:{
		rows:[],
		total:0,
	},
	typeList:[],
	
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
