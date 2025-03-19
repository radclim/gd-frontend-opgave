<template>
  <main>
    <MainHeader :count="count" />
    <ModeSwitcher :current-view="view" @updateView="updateView" />
    <div>
      <div v-if="view == 'list'">
        <AlbumList
          v-for="(album, index) in albums"
          :key="index"
          :album="album"
          @viewAlbum="viewAlbum"
        />
      </div>
      <div v-if="view == 'card'">
        <AlbumCard
          v-for="(album, index) in albums"
          :key="index"
          :album="album"
          @viewAlbum="viewAlbum"
        />
      </div>
      <div v-if="selectedAlbum && view == 'single'">
        <AlbumSingle :album="selectedAlbum" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainHeader from './components/MainHeader.vue'
import AlbumCard from './components/AlbumCard.vue'
import AlbumList from './components/AlbumList.vue'
import ModeSwitcher from './components/ModeSwitcher.vue'
import AlbumSingle from './components/AlbumSingle.vue'
const albums = ref([])
const count = ref(0)
const view = ref(null)
const selectedAlbum = ref(null)

const updateView = (newView) => {
  view.value = newView
  localStorage.setItem('viewMode', newView)
}

const viewAlbum = (album) => {
  selectedAlbum.value = album
  view.value = 'single'
}

const fetchUserData = async () => {
  try {
    const response = await fetch('https://www.theaudiodb.com/api/v1/json/2/album.php?i=112035')
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
  const savedView = localStorage.getItem('viewMode') || 'list'
  if (savedView) {
    view.value = savedView
  }
})
</script>

<style scoped></style>
