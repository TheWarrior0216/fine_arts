<script setup>
import { computed } from "vue";
import { Artwork } from "../models/Artwork.js";
import { AppState } from "../AppState.js";


defineProps({art: Artwork})



// function

</script>


<template>
<div class="card m-4">
        <img class="card-img-top border" :src="art.imgUrl" alt="Title" />
      </div>
</template>


<style lang="scss" scoped>

</style>