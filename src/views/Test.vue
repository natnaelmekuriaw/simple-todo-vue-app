<template>
  <div class="test">
    <p class="display-3 font-weight-bold">Testing</p>
      <div class="flex-grid">
      <v-container class="my-5 ">


<v-layout row wrap>

        <v-flex xs12 sm6 md4 lg3 >
          <v-card flat class="text-center ma-3">
            <v-responsive >
            <v-img src="/images/graduation-img2.png" height="200" alt="jaj" juatify-top>
             
             </v-img>
            </v-responsive>
          <v-card-text>
              <div class="subheading">Natnael</div>
              <div class="grety-text">Software Developer</div>
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

      <v-layout row>
           <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Button
        </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
      </v-layout>

         


      <v-layout row flat wrap >
        <v-flex xs12 md6>
          <v-btn  outline block class="primary my-1 ">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn  outline block class="primary my-1 ">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn  outline block class="primary my-1 ">3</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn  outline block class="primary my-1 ">4</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row flat wrap justify-space-around>
          <v-flex xs4 md2>
          <v-btn  outline block class="primary my-1 ">5</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn  outline block class="primary my-1 ">6</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
      </div>
      
      
      <div class="breakpoints">
          <v-btn dark class="indigo text-lowercase hidden-sm-and-up">hidden-sm-and-up</v-btn>
          <v-btn dark class="pink text-lowercase hidden-md-and-up">hidden-md-only</v-btn>
          <v-btn dark class="success text-lowercase hidden-sm-and-down">hidden-sm-and-down</v-btn>
      </div>

      <div class="components-style">
        <div class="buttons">
          <v-btn >Normal Button </v-btn>
          <v-btn class="pink white--text">Button 2</v-btn>
          <v-btn dark depressed color="indigo">Button 3</v-btn>
          <v-btn  text class="pink--text"> button</v-btn>
          <v-btn depressedv  class="text-capitalize pink white--text">Iconed button </v-btn>
          <v-btn depressed class="pink white--text"><v-icon left>mdi-email</v-icon><span>Email</span></v-btn>
          <v-btn dark depressed small class="indigo text-lowercase">small button</v-btn>
          <v-btn dark depressed large class="indigo text-uppercase">large button</v-btn>
          <v-btn dark depressed fab x-small class="pink"><v-icon>mdi-heart</v-icon></v-btn>
        </div>
      </div>

      <div class="text-style">
        <p class="display-1 font-weight-bold">Text, Color</p>
          <p class="blue white--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eligendi iusto rerum quae explicabo ratione doloribus odit similique dolorem officia quis reprehenderit! Accusamus sequi quo quisquam vero expedita maiores illo!</p>
          <p class="pink lighten-5 white--text text--darken-5 text-capitalize"> Capitalized Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, nulla ad reprehenderit officiis, asperiores magni omnis, ipsa ex error est ipsum commodi consequatur sunt! Eveniet cupiditate non perferendis at enim!</p>
          <h4 class="display-4">Massive Display</h4>
          <h1 class="display-1 text-uppercase">Massive Display</h1>
          <p class="font-weight-bold">Bold text</p>
          <p class="font-italic">Italic text</p>
          <p class="headline">Headline</p>
          <p> class="subheading">Subheading</p>
          <p class="caption">Caption</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>