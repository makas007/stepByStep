<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item">
        <!-- <button class="page-link" href="#" :disabled="current >= 6" @click="prevPage">Prev</button> -->
        <a class="page-link" href="#" @click="change(current-1)" :class="{'disabled': current === 0}">Prev</a>
      </li>
      <li class="page-item"
          v-for="( page, i ) in total" :key="i">
        <a class="page-link" href="#" @click.prevent='change(i)'>{{ i+1 }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" @click="change(current+1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    pages: 1
  }),
  props: {
    current: {
      type: Number,
      default: 0
    },
    change: {
      type: Function
    },
    total: {
      type: Number
    }
  },
}
</script>
<style scoped>
.page-link.disabled {
opacity: 0.5;
pointer-events: none;
}
</style>