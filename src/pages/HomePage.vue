<script setup>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { artworkService } from "../services/ArtworkService.js";
import { AppState } from "../AppState.js";
import ArtworkTemp from "../components/ArtworkTemp.vue"
import SwichPage from "../components/SwichPage.vue";

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
  <div class="row align-items-center">
    <div v-for="art in artwork" :key="art.id" class="col-6 ">
      <ArtworkTemp :art = "art"/>
    </div>
    <SwichPage/>
  </div>
</section>

</template>

<style scoped lang="scss"></style>
