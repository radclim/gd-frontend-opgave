<template>
  <div @click="handleClick">
    <img :src="album.strAlbumThumb" alt="" />
    <p>
      <b>{{ album.strAlbum }}.</b> {{ album.strDescriptionEN }}
    </p>
    <hr />
  </div>
</template>
<script setup>
const props = defineProps({
  album: Object,
})
const emit = defineEmits(['viewAlbum'])

const handleClick = () => {
  emit('viewAlbum', props.album)
}
</script>
<style></style>
