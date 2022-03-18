<template>
  <div class="home">

    <NavBar/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import { HTTP } from '../https-common';

export default {
  name: 'Home',

  components: {
    NavBar
  },

  data(){

    return{

      articles:[],
    }
  },

  async created(){

    try{

          const response = await HTTP.get("everything?q=bitcoin");
          const data = response.data.articles

          this.articles = data

          console.log(data)
    }
    catch(e){

      console.log(e)


    }

  
  }
}
</script>
