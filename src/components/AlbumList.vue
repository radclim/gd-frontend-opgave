<template>
  <div>
    <img :src="album.strAlbumThumb" alt="" />
    <p>
      <b>{{ album.strAlbum }}.</b> {{ album.strDescriptionEN }}
    </p>
    <hr />
  </div>
</template>
<script setup>
defineProps({
  album: Object,
})
</script>
<style></style>
