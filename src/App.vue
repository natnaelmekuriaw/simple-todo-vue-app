<template>
  <v-app >
    <v-main class="grey lighten-4">
    <Navbar class="grey lighten-4"/>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>