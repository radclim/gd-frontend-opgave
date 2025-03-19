<template>
  <main>
    <MainHeader :count="count" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainHeader from './components/MainHeader.vue'
const albums = ref([])
const count = ref(0)

const fetchUserData = async () => {
  try {
    const response = await fetch('https://www.theaudiodb.com/api/v1/json/2/album.php?i=111752')
    const data = await response.json()
    for (let album of data.album) {
      if (album.strReleaseFormat == 'Album') {
        count.value++
        albums.value.push(album)
      }
    }
  } catch (error) {
    console.error('Error fetching album data:', error)
  }
}

onMounted(() => {
  fetchUserData()
})
</script>

<style scoped></style>
