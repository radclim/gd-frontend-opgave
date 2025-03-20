<template>
  <div class="hover:cursor-pointer" @click="handleClick">
    <img :src="album.strAlbumThumb" alt="" />
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
