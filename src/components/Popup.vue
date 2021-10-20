<template>
  <div class="popup">
    <v-container>
        <v-layout column>
        <v-flex>
        <v-btn tile text class="success white--text lighten-16" @click="dialog = true">
        Add New Project
        </v-btn>
        <v-dialog v-model="dialog" max-width="400px" class="mt-0">
        <v-card>
        <v-card-title>
        Add New Project
        </v-card-title>
        <v-card-text>
        Are you sure you want to add a new project
        </v-card-text>

        <v-form v-model="create" class="pa-9" ref="form">
        <v-text-field label="Project Title" prepend-icon="mdi-folder" v-model="project.title" :rules="[myRules.required,myRules.min]" required></v-text-field>
        <v-text-field label="Person" prepend-icon="mdi-account" v-model="project.person"></v-text-field>
        <v-text-field label="Information" prepend-icon="mdi-circle-edit-outline" v-model="project.info"></v-text-field>

        <v-menu offset-y>
        <template v-slot:activator="{attrs, on}">
        <v-text-field label="Due date"  prepend-icon="mdi-calendar-range" v-model="project.due" v-bind="attrs" v-on="on"></v-text-field>
        </template>
        <v-date-picker  v-model="project.due"></v-date-picker>
        </v-menu>
        <v-spacer></v-spacer>
        </v-form>

        <v-dialog v-model="completed" max-width="300px" class="mt-0">
        <v-card>
        <v-card-title flat class="white success--text">
        Project Added Sucessfully
        </v-card-title>
        <v-card-text>
        <div>{{project.title}}</div>
        <div>{{project.person}}</div>
        <div>{{project.info}}</div>
        <div>{{project.due}}</div>
        </v-card-text>
        </v-card>
        </v-dialog>

        <v-card-actions>
        <v-btn text color="red" @click="dialog=false">
        Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="blue" @click="submit">
        Create
        </v-btn>
        </v-card-actions>
        </v-card>
        </v-dialog>
        </v-flex>
        </v-layout>
    </v-container>

  </div>
</template>

<script>
import format from 'date-fns/format'
import db from '../fb'
import 'firebase/compat/firestore'
export default {
name: 'Popup',
data(){
  return{
    project:{title: '',person: '', due: '',info: ''},
    myRules:{
      required: value => !!value || "Title can't be empty!",
       min:value => value.length >= 6 || 'Minimum Project title is 6 characters long!'
    },
    dialog: false,
    create:false,
    completed:false,
    
  }
},
methods:{
submit(){
  if(this.$refs.form.validate()){
    const project = {
      title: this.project.title,
      person: this.project.person,
      due: this.project.due,
      content: this.project.info,
      status : "started"
    }
    console.log(project)
    
      db.firebase.firestore().collection('projects').add(project).then(()=>{this.completed = true;}).catch(()=>{alert("Error")})
    
  }
}
},
computed:{
  formatedDate(){
    return this.project.due ? format(this.project.due, 'Do MMM YYYY')  : ''
  }
}
}
</script>

<style>

</style>