<template>
  <div>
    <ul class="qwe">
      <div v-for="photo in photos" :key="photo.id" class="card" style="width: 18rem;">
        <img class="card-img-top" :src="photo.url" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </ul>
    <Pagination :records="totalPages" v-model="page" :per-page="limitPage" @paginate="onPageChange"/>
    <!-- <Pgn :change="onPageChange" 
      :current="currentPage"
      :total="totalPages" /> -->
  </div>
</template>

<script>
import axios from 'axios'
// import Pgn from './Pgn'
import Pagination from 'vue-pagination-2'
export default {
  name: 'photos',
  data: () => ({
    page: 1,
    photos: [],
    currentPage: 0,
    limitPage: 6,
    totalItems: 60,
    totalPages: 0
    

  }),
  created () {
    this.getData()
    // axios.then
    this.getTotalPages()
    this.totalPages = Math.ceil(this.totalItems/this.limitPage)
  },
  methods: {
    getData (){
      axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${this.currentPage*this.limitPage}&_limit=${this.limitPage}`)
        .then((response) => {
          this.photos = response.data
        })
    },
    getTotalPages () {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          this.totalPages = response.data.length
          console.log(response.data.length);
          // console.log(response.data.length(Math.ceil(this.totalItems/this.limitPage)));
        })
    },
    onPageChange ( page ) {
      this.currentPage = page
      this.getData()
    },
    callback: function(page) {
      console.log(`Page ${page} was selected. Do something about it`);
    }
  },
  components: {
    // Pgn,
    Pagination
  }

}
</script>

<style scoped>
.qwe {
  display: flex;
  /* width: 75%; */
  flex-wrap: wrap;
}
</style>