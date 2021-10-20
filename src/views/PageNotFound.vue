<template>
  <div class="page-not-found">
    <h2>Sorry! Page Not Found</h2>
    <router-link :to="{name:'Home'}">
    <v-btn text>
    Go Home
    <v-icon right>mdi-home</v-icon>
    </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
 text-decoration: none;
 display: inline-block;
}
</style>