<template>
  <div class="home ">
    <h1 class="subtitle-1 grey--text mx-4 mb-4">Dashboard</h1>
    <v-container class="my-16 px-10 ">
      <v-layout row class="mb-9 ml-2">
      
      <v-tooltip top>
      <template v-slot:activator="{on,attrs}">
        <v-btn text small color="grey" @click="sortBy('title')" class="mr-8" v-bind="attrs"
          v-on="on">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">By Folder Name</span>
          <v-icon right small >mdi-sort-alphabetical-{{sortIcon}}</v-icon>
        </v-btn>
      </template>

        <span class="caption">Sort projects by project name</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
        <v-btn text small color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
          <v-icon small left>mdi-account</v-icon>
          <span class="caption text-lowercase">By Person</span>
          <v-icon right small >mdi-sort-alphabetical-{{sortIcon}}</v-icon>
        </v-btn>
        </template>
        <span class="caption">Sort projects by person</span>
      </v-tooltip>
      </v-layout>

      <v-card  flat class="px-3" v-for="project in projects" :key="project.title" >
          <v-layout row wrap :class="`pa-3 project ${project.status}`" >
            <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due Date</div>
            <div>{{project.due}}</div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs2 sm4 md2 align-right >

                <v-chip small justify-end :class="`${project.status} white--text cpation my-2 ml-10`">
                {{project.status}} 
                </v-chip>  

            </v-flex>
          </v-layout>
          <v-divider class="my-3"></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Dashboard',
    data(){
      return {
        projects:[
          {title: 'Design Website',person: 'Natnael', due: '1st jan 2021',status: 'Completed'},
          {title: 'Interface Design',person: 'Natnael', due: '3rd may 2021',status: 'Ongoing'},
          {title: 'Develope a Game',person: 'Gelila', due: '22nd april 2021',status: 'Overdue'},
          {title: 'Create a Forum',person: 'Mastewal', due: '3rd june 2021',status: 'Ongoing'},
          {title: 'Create Application',person: 'Hilina', due: '3rd june 2021',status: 'Started'}
        ],
        sort:null,
        sortIcon:'ascending'
      }
    },
    methods: {
      sortBy(value){
        if(this.sort==='dec'){
          this.projects.sort((a,b) => a[value] < b[value] ? 1 : -1 )
          this.sort=null;
          this.sortIcon='ascending'
          return
        }
         this.projects.sort((a,b) => a[value] < b[value] ? -1 : 1 )
         this.sortIcon='descending'
        this.sort='dec'
        
      }
    },
    components: {

},
  }
</script>

<style scoped>
.project.Completed{
  border-left: 4px solid rgb(1, 189, 70)
}
.project.Ongoing{
  border-left: 4px solid rgb(255, 166, 0)
}
.project.Overdue{
  border-left: 4px solid rgb(255, 93, 64)
}
.project.Started{
  border-left: 4px solid rgb(120, 113, 112)
}

.v-chip.Completed{
  background: rgb(8, 226, 88)!important
}
.v-chip.Ongoing{
  background: rgb(255, 166, 0)!important
}
.v-chip.Overdue{
  background: rgb(255, 93, 64)!important
}
.v-chip.Started{
  background: rgb(120, 113, 112)!important
}

</style>
