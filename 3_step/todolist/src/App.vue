<template>
  <div id="app">
    <h1 class="title"> {{title}} </h1>
    <button @click="component = 'ListNote'">My notes</button>
    <button @click="component = 'CreateTodo'">Create new note</button>

    <keep-alive>
      <createTodo 
        :saveNote="saveNote"
        v-if="component == 'CreateTodo'"/>
    </keep-alive>

      
      <listNote
        :saveAllEdits="saveAllEdits"
        :appNotes="appNotes"
        v-if="component == 'ListNote'
      "/>  
  
     

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
      appNotes: [],
    }
  },
  methods: {
    saveNote(obj){
      this.appNotes.push(obj)
      console.log(this.appNotes);
    },
    saveAllEdits(obj){
      this.appNotes = JSON.parse(JSON.stringify(obj))
      console.log(this.appNotes);
    }
    // deleteTodo(i, key){
    //   this.appNotes[key].todos.splice(i, 1)
    // },
    // editTodo(i){
    //   // this.appNotes[this.appNotes.length -1].todos[i].editState == true
    //   console.log(this.appNotes[i]);
    // }
  },
  components: {
    CreateTodo,
    ListNote
  }
}
</script>
<style>

</style>