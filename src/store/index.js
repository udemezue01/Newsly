import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../https-common';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    everything:[],
    headlines:[],



  },
  mutations: {

    SET_EVERYTHING(state, everything){

      state.everything = everything
    },

  },


  actions: {

    async getEverything({commit}){

      try{

        const response = await HTTP.get("everything?q=bitcoin");
        const everything = response.data.articles

        console.log(everything)

        commit('SET_EVERYTHING', everything )


      }

      catch(e){

        console.log(e)


      }

    }
  },
  modules: {
  }
})
