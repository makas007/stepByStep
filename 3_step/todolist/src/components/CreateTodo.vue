<template>
  <div class="wrapper">
    <div class="content">
      <hr>
      <p>Create new ToDo</p>
      <input type="text" placeholder="Set name the note..." v-model="noteName">
      <br>
      <br>
      <input type="text" placeholder="Create todo..." v-model="todoName">
      <button @click="addTodo(id++)">ADD</button>
      <p>{{noteName}}: </p>
      <div v-for="(note, i) of notes" :key="note.id">
        <p>
          <span>{{i+1}}. {{note.text}}</span>
          <input type="checkbox" v-model="note.isComplete" @click="noteComplete(i)"> 
        </p>
      </div>
      <p>Complete: </p>
      <div>
        <div v-for="item in notesDone" :key="item">
          <p>
            <span>{{item}}</span>
            <span> ==> IS COMPLETE</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      noteName:"",
      todoName:"",
      notes:[],
      id: 1,
      isDone: this.isComplete,
      notesDone: []
    }
  }, 
  destroyed() {
    this.handleUpdateNotes(this.notes);
  },
  methods: {
    noteComplete(i){
      this.notesDone.push(this.notes[i].text);
      this.notes.splice(i, 1);
    },
    addTodo(){
      
      this.notes.push({
        id: this.id,
        text: this.todoName,
        isComplete: false

      })
      this.todoName = ''
    },
    addNote(){

    }
  },
  props:['handleUpdateNotes']
}
</script>