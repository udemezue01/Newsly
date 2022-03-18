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

  async created(){

    try{

          const response = await HTTP.get("everything?q=bitcoin");
          const data = response.data.articles

          console.log(data)
    }
    catch(e){

      console.log(e)


    }

  
  }
}
</script>
