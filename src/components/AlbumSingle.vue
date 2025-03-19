<template>
  <div>
    <img :src="album.strAlbumThumb" alt="" />
    <h1>{{ album.strAlbum }} by {{ album.strArtist }}</h1>
    <p>{{ album.intYearReleased }} • {{ album.strStyle }}</p>
    <p>{{ album.strDescriptionEN }}</p>
  </div>
</template>
<script setup>
defineProps({
  album: Object,
})
</script>
<style></style>
