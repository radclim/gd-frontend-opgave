<template>
  <div>
    <img :src="album.strAlbumThumb" alt="" />
  </div>
</template>
<script setup>
defineProps({
  album: Object,
})
</script>
<style></style>
