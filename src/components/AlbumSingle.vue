<template>
  <div>
    <img :src="album.strAlbumThumb" alt="" />
    <h1 class="mt-3 text-gray-600">
      <span class="font-serif font-bold text-xl text-black">{{ album.strAlbum }}</span> by
      {{ album.strArtist }}
    </h1>
    <p v-if="album.intYearReleased" class="text-gray-600">
      Released in {{ album.intYearReleased }}
    </p>
    <p v-if="album.strStyle" class="text-gray-600">{{ album.strStyle }}</p>
    <p class="text-gray-600">{{ album.strDescriptionEN }}</p>
  </div>
</template>
<script setup>
defineProps({
  album: Object,
})
</script>
<style></style>
