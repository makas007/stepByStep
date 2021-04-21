<template>
  <div class="wrapper">
    <h2>List notes</h2>
    <!-- <p>{{this.cloneNotes}} </p> -->
    <ul>
      <li v-for="(item, i) in allMyNotes" :key="i">
        <h2>{{ item.noteName }}</h2>
        <input type="button" value="Delete note" @click="deleteNote(i)" />
        <div
          v-for="(todo, index) in item.todos"
          :key="index"
          :class="{ strike: todo.isCompleted }"
        >
          <span>{{ todo.text }}</span>
          <input
            type="checkbox"
            @click="todo.isCompleted = !todo.isCompleted"
          />
          <input type="button" value="Delete" @click="delMyTodo(index, i)" />
          <input
            type="button"
            value="Edit"
            @click="todo.editState = !todo.editState"
          />
          <input
            type="text"
            @keyup.enter="todo.editState = !todo.editState"
            v-if="todo.editState == true"
            v-model="todo.text"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // created(){
  //     this.$store.dispatch('myAsyncMutation')
  //   },
  data() {
    return {
      id: 0
      // cloneNotes: JSON.parse(JSON.stringify(this.$store.getters.allMyNotes)),
    };
  },
  // computed: {
  //     allMyNotess(){
  //         return this.$store.getters.allMyNotes
  //     }
  // },

  computed: mapGetters(["allMyNotes"]),
  methods: {
    delMyTodo(i, index) {
      this.$store.dispatch("delMyTodo", { i: i, index: index });
    },
    deleteNote(i) {
      this.$store.dispatch("delMyNote", i);
      // console.log(this.cloneNotes);
      // console.log(this.$store.getters.allMyNotes);
    },
    test() {
      console.log("awdasf");
    }
  }
};
</script>
<style scoped>
.strike {
  text-decoration: line-through;
}
</style>