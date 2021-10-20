<template>
  <nav app >
    <v-toolbar flat app class="grey  lighten-4">
        <v-app-bar-nav-icon class="grey--text" @click="draw = !draw">
        </v-app-bar-nav-icon>
        <v-app-bar-title class="text-uppercase grey--text" app>
            <span class="font-weight-light">Todo</span>
            <span>App</span>
        </v-app-bar-title>
        <v-spacer></v-spacer>

         <!-- dropdown menu -->
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text slot="activator" color="grey" v-bind="attrs" v-on="on" @click="downUp">
          <v-icon left>mdi-{{menuBtn}}</v-icon>
          <span>Menu</span>
        </v-btn>
      </template>
        <v-list class="pa-0">
          <v-list-item route to="/">
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list class="pa-0">
          <v-list-item route to="/teams">
            <v-list-item-title>Teams</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list class="pa-0">
          <v-list-item route to="/projects">
            <v-list-item-title>projects</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>



        <v-btn text color="grey">
            <span>Sign Out</span>
            <v-icon right >mdi-logout-variant</v-icon>
        </v-btn>
    </v-toolbar>

     <v-navigation-drawer  app v-model="draw" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-10">
            <v-avatar size="150">
                <v-img src="/images/graduation-img1.png" alt="username"></v-img>
            </v-avatar>
            <p class="white--text heading mt-3">
              Natnael Mekuriaw
            </p>
        </v-flex>
        <v-flex>
        <Popup />
        </v-flex>
      </v-layout>
     <v-list  >
          <v-list-item-group>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">mdi-{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

  </nav>
</template>

<script>
import Popup from './Popup'
export default {
    data(){
        return{
            draw:false,
            links :[
                {icon:'view-dashboard', text:'Dashboard', route:'/'},
                {icon:'account', text:'Teams', route:'/teams'},
                {icon:'folder', text:'Projects', route:'/projects'},
                {icon:'information-variant', text:'about', route:'/about'}
            ],
            menuBtn: 'chevron-down',
            down:false,

        }
    },
    methods: {
      downUp(){
        if(!this.down){
          this.menuBtn = 'chevron-up'
          this.down = true
        }
        else{
          this.menuBtn = 'chevron-down'
          this.down = false
        }
      }
    },
    components: {
      Popup,
    }
}
</script>

<style>

</style>