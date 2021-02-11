<template>
    <div class="wrapper">
        <h2>List notes</h2>
        <p>{{this.cloneNotes}} </p>
        <ul>
            <li v-for="(item, i) in cloneNotes" :key="i" >
                <h2>{{item.noteName}} </h2>
                <div v-for="(todo, index) in item.todos" :key="index" 
                :class="{'strike': todo.isCompleted}" >
                    <span >{{todo.text}}</span>
                    <input type="checkbox" @click="todo.isCompleted = !todo.isCompleted" >
                    <input type="button" value="Delete" @click="deleteTodo(index, i)">
                    <input type="button" value="Edit" @click="todo.editState = !todo.editState">
                    <input type="text" v-if="todo.editState == true"
                           v-model="todo.text" >
                </div>
            </li>
        </ul>
        <button v-if="cloneNotes.length !== 0"
              @click="saveAllEdits(cloneNotes)"
        >SAVE</button>
    </div>
</template>

<script>
export default {
    props:["appNotes","saveAllEdits"],
    data(){
        return {
            id: 0,
            cloneNotes: JSON.parse(JSON.stringify(this.appNotes)),

        }
    },
    methods: {
      deleteTodo(index, i){
        this.cloneNotes[i].todos.splice(index, 1)
        console.log(this.cloneNotes[i].todos[index]);
      },
    }
}
</script>
<style scoped>
    .strike {
        text-decoration: line-through;
    }

</style>