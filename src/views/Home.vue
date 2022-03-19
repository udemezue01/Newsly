<template>
  <div class="home">

    <NavBar/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import { mapGetters, mapState} from 'vuex';

export default {
  name: 'Home',

  components: {
    NavBar
  },

  computed:{

    ...mapState(['everything']),
  },

  created(){

    this.$store.dispatch('getEverything');
  }


 
}
</script>
