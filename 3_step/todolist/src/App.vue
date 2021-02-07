<template>
  <div id="app">
    <h1 class="title"> {{title}} </h1>
    <button @click="component = 'ListNote'">My notes</button>
    <button @click="component = 'CreateTodo'">Create new note</button>

    <!-- <keep-alive>
      <component :is="component" v-show="component"></component>
    </keep-alive> -->
    <createTodo :handleUpdateNotes="updateNotes" v-if="component == 'CreateTodo'"/>

    <listNote :notes="notesApp" v-if="component == 'ListNote'"/>   
  </div>
</template>

<script>
import CreateTodo from './components/CreateTodo';
import ListNote from './components/ListNote'


export default {
  name: "App",
  data() {
    return {
      title: "Todo app",
      component: 'CreateTodo',
      notesApp:[],
      theDone: false
    }
  },
  methods: {
    updateNotes(notes){
      this.notesApp = notes
    }
  },
  components: {
    CreateTodo,
    ListNote
  }
}
</script>
<style>
.app {
  display: flex;
  justify-content: center;
  align-content: center;
}

</style>