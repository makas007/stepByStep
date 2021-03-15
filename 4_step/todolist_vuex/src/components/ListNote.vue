<template>
    <div class="wrapper">
      <h2>List notes</h2>
      <ul>
        <li v-for="(item, i) in allMyNotes" :key="i" >        
          <h4>{{item.noteName}}</h4>
          <button type="button" class="btn btn-danger" @click="deleteNote(i)">Delete note</button>
          <div v-for="(todo, index) in item.todos" :key="index" 
          :class="{'strike': todo.isCompleted}" >
              <span >{{todo.text}}</span>
              <input type="checkbox" @click="todo.isCompleted = !todo.isCompleted" >
              <button type="button" class="btn btn-light" @click="delMyTodo(i, index)">Del</button>
              <button type="button" class="btn btn-light" @click="todo.editState = !todo.editState">Edit</button>
              <input type="text" v-if="todo.editState == true"
                      v-model="todo.text" >
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
// created(){
//     this.$store.dispatch('myAsyncMutation')
//   },
    data(){
        return {
            id: 0,
        }
    },
    // computed: {
    //     allMyNotess(){
    //         return this.$store.getters.allMyNotes
    //     }
    // },
    
    computed: mapGetters([
        'allMyNotes',
        
    ]),
    methods: {
      delMyTodo(i, index){
        this.$store.dispatch('delMyTodo', {i:i, index:index})

      },
      deleteNote(i){
        this.$store.dispatch('delMyNote', i)
        // console.log(this.cloneNotes);
        // console.log(this.$store.getters.allMyNotes);

      },
    }
}
</script>
<style scoped>
    .strike {
        text-decoration: line-through;
    }

</style>