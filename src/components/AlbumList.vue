<template>
  <div
    class="border-b-1 border-gray-200 py-7 last:border-b-0 last:mb-15 first:pt-0 hover:cursor-pointer"
    @click="handleClick"
  >
    <img :src="album.strAlbumThumb" alt="" />
    <p class="text-gray-600 mt-1.5">
      <b>{{ album.strAlbum }}.</b> {{ album.strDescriptionEN }}
    </p>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  album: Object,
})
const emit = defineEmits(['viewAlbum'])

const handleClick = () => {
  emit('viewAlbum', props.album)
}
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<style></style>
