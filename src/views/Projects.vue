<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text mx-4 mb-4">Projects</h1>

    <v-container class="my-10 px-16">
      <v-row class='justify-center'>
      <v-expansion-panels accordion>

        <v-expansion-panel v-for="project in myProjects" :key="project.person">
          <v-expansion-panel-header>
          <div class="subheading grey--text">{{project.title}}</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
            <v-card-text class="px-0 grey--text">
            <div class="font-weight-bold">{{project.due}}</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci repudiandae odio aut perferendis dignissimos neque praesentium beatae ad, provident magnam eos, esse incidunt repellendus blanditiis architecto. Aliquid, accusantium veritatis.</div>
            </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
name: 'Projects',
  data(){
    return{
        projects:[
          {title: 'Design Website',person: 'Natnael', due: '1st jan 2021',status: 'Completed'},
          {title: 'Create Application',person: 'Hilina', due: '3rd may 2021',status: 'Ongoing'},
          {title: 'Develope a Game',person: 'Gelila', due: '22nd april 2021',status: 'Overdue'},
          {title: 'Create a Forum',person: 'Mastewal', due: '3rd june 2021',status: 'Ongoing'},
          {title: 'Interface Design',person: 'Natnael', due: '3rd june 2021',status: 'Started'},
        ],
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Natnael'
      })
    }
  }
}
</script>

<style>

</style>