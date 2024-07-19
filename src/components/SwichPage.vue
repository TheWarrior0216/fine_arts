<script setup>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { artworkService } from "../services/ArtworkService.js";

const pageNum = computed(()=> AppState.page)

async function pageSwitch(pageNum){
  const response = await artworkService.pageSwitch(pageNum)
}
async function pageSwitchDown(pageNum){
  const response = await artworkService.pageSwitch(pageNum)
}

</script>


<template>
<div class="d-flex justify-content-around">
      <button @click="pageSwitchDown(pageNum)" class="btn rounded-pill btn-info px-5 mb-3 mdi mdi-arrow-left"> Previous Page</button>
      <h2> {{ pageNum }}</h2>
      <button @click="pageSwitch(pageNum)" class="btn rounded-pill btn-info px-5 mb-3 mdi mdi-arrow-right"> Next Page</button>
    </div>
</template>


<style lang="scss" scoped>

</style>