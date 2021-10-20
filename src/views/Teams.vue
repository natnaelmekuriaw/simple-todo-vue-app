<template>
  <div class="teams">
    <h1 class="subtitle-1 grey--text mx-4 my-4">Teams</h1>

    <v-container class="my-10 px-16">
      <v-layout row wrap>

        <v-flex xs12 sm6 md4 lg3 v-for="person in teams" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive >
            <v-img :src="person.img" height="200" alt="jaj" juatify-top>
             
             </v-img>
            </v-responsive>
          <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grety-text">{{person.role}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text  small color="grey">
              <v-icon left>mdi-message-bulleted</v-icon>
              <span>Message</span>
            </v-btn>
            <v-btn fab text x-small color="grey">
            <v-icon >mdi-heart-multiple</v-icon>
            </v-btn>
            <v-btn fab text x-small color="grey">
            <v-icon dense top>mdi-share</v-icon>
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-flex>


      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
name: 'Teams',
data(){
  return{
    teams:[
      {img: '/images/graduation-img2.png', name: 'Person 1', role: 'Role'},
      {img: '/images/graduation-img3.png', name: 'Person 2', role: 'Role'},
      {img: '/images/graduation-img5.png', name: 'Person 3', role: 'Role'},
      {img: '/images/graduation-img4.png', name: 'Person 4', role: 'Role'},
      {img: '/images/graduation-img6.png', name: 'Person 5', role: 'Role'},
      {img: '/images/graduation-img3.png', name: 'Person 6', role: 'Role'},
      {img: '/images/graduation-img2.png', name: 'Person 7', role: 'Role'},
      ]
  }
}
}
</script>

<style>

</style>