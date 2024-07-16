<script setup>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { artworkService } from "../services/ArtworkService.js";
import { AppState } from "../AppState.js";
import ArtworkTemp from "../components/ArtworkTemp.vue"

const artwork = computed(()=> AppState.artwork)
const pageNum = computed(()=> AppState.page)

onMounted(()=> {
  getApi()
})

async function getApi() {
  try {
    const response = await artworkService.getApi()
    console.log(response)
  } catch (error) {
    Pop.error(error)
  }
}
</script>

<template data-bs-theme="dark">

  <section class="container">
  <div class="row">
    <div v-for="art in artwork" :key="art.id" class="col-md-4">
      <ArtworkTemp :art = "art"/>
    </div>
    <div class="d-flex justify-content-around">
      <button class="btn rounded-pill btn-info px-5 mb-3 mdi mdi-arrow-left"> Previous Page</button>
      <h2> {{ pageNum }}</h2>
      <button class="btn rounded-pill btn-info px-5 mb-3 mdi mdi-arrow-right"> Next Page</button>
    </div>
  </div>
</section>

</template>

<style scoped lang="scss"></style>
