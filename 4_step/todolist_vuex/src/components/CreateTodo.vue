<template>
  <div class="wrapper">
    <div class="content">
      <hr>
      <p>Create new ToDo</p>
      <input type="text" placeholder="Set name the note..." v-model="noteNameSelf">
      <br>
      <br>
      <input @keyup.enter="addTodo(todoNameSelf,noteNameSelf)" type="text" placeholder="Create todo..." v-model="todoNameSelf">
      <button @click="addTodo(todoNameSelf,noteNameSelf)">ADD</button>


      <div v-for="(item, i) in notes[notes.length-1].todos" :key="i">
        <p>
          <span >{{i + 1 }}. {{item.text}} </span>
        </p>
      </div>
      <button v-if="notes[notes.length-1].todos.length !== 0"
              @click="saveStateNotes(), delNote()"
      >SAVE</button>

    </div>
  </div>
</template>

<script>
// import { mapMutations, mapState } from 'vuex';
export default {
  // created(){
  //   this.$store.dispatch('loadNotes', 1000)
  // },
  data(){
    return {
      noteNameSelf:'',
      todoNameSelf:'',
      // cloneNotes: JSON.parse(JSON.stringify(this.notes)),
       notes:[{
        noteName:'',
        todos:[],
        completeTodos:[{id:0,text:' text todo completed'}]
      }],
      id: -1,

    }
  },
  methods:{
    addTodo(todoName, noteName){
      if(todoName !== "") {
        this.notes[this.notes.length-1].todos.push({
          id: this.id++,
          text: todoName,
          isCompleted: false,
          editState: false

        })
        this.todoNameSelf='';
      }
      if(noteName !== "") {
        this.notes[this.notes.length-1].noteName = noteName
      }
    },
    delNote(){
      this.notes = [{
        noteName:'',
        todos:[],
        completeTodos:[]
      }]
      this.noteNameSelf=''
    },
    saveStateNotes(){
      this.$store.dispatch('myAsyncMutation', this.notes)
    },

 


  }
}
</script>