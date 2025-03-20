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
    <h1 class="font-serif font-bold text-xl text-black mt-4">Tracklist</h1>
    <ul>
      <li v-for="(track, index) in tracks" :key="index" class="text-gray-600">
        {{ track.strTrack }}
      </li>
    </ul>
    <p @click="handleClick" class="text-gray-800 hover:cursor-pointer mt-3">← Back to overview</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  album: Object,
})
const tracks = ref([])

const emit = defineEmits(['goBack'])

const handleClick = () => {
  emit('goBack')
}

const fetchTracks = async () => {
  try {
    const response = await fetch(
      `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${props.album.idAlbum}`,
    )
    const data = await response.json()
    for (let track of data.track) {
      tracks.value.push(track)
    }
    console.log(tracks.value)
  } catch (error) {
    console.error('Error fetching album data:', error)
  }
}

onMounted(() => {
  fetchTracks()
})
</script>
<style></style>
