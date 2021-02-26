<template>
<div class="container">
  <div class="row">
    <div id="app">
      <h1 class="title"> {{title}} </h1>
      <button  class="btn btn-outline-primary" @click="component = 'ListNote'">My notes</button>
      <button class="btn btn-outline-primary" @click="component = 'CreateTodo'">Create new note</button>

      <keep-alive>
        <createTodo 
          v-if="component == 'CreateTodo'"/>
      </keep-alive>

        
        <listNote
          v-if="component == 'ListNote'
        "/>  

    </div>
  </div>
</div> 
</template>


<script>
import CreateTodo from './components/CreateTodo';
import ListNote from './components/ListNote';



export default {
  name: "App",
  data() {
    return {
      title: "Todo app",
      component: 'CreateTodo',
    }
  },
  methods: {

  },
  components: {
    CreateTodo,
    ListNote
  },
  
}
</script>
<style>

</style>