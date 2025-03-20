<template>
  <div
    class="border-b-1 border-gray-200 py-7 last:border-b-0 last:mb-15 first:pt-0 hover:cursor-pointer"
    @click="handleClick"
  >
    <img :src="album.strAlbumThumb" alt="" />
    <p class="text-gray-600 mt-1.5">
      <b>{{ album.strAlbum }}.</b> {{ album.strDescriptionEN }}
    </p>
    <!-- <hr class="mt-6 mb-6 border-t-1 border-gray-200" /> -->
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
