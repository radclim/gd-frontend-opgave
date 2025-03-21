<template>
  <header class="w-[45%]">
    <MainHeader :count="count" />
    <ModeSwitcher :current-view="view" @updateView="updateView" />
  </header>
  <main class="w-[45%]">
    <transition name="fade" mode="out-in">
      <div :key="view">
        <div v-if="view === 'list'">
          <AlbumList
            v-for="(album, index) in albums"
            :key="index"
            :album="album"
            @viewAlbum="viewAlbum"
          />
        </div>

        <div v-else-if="view === 'card'" class="grid grid-cols-3 gap-1.5">
          <AlbumCard
            v-for="(album, index) in albums"
            :key="index"
            :album="album"
            @viewAlbum="viewAlbum"
          />
        </div>

        <div v-else-if="selectedAlbum && view === 'single'">
          <AlbumSingle :album="selectedAlbum" @goBack="goBack" />
        </div>
        <div v-if="err" class="flex justify-center">
          <p class="error">{{ err }}</p>
        </div>
      </div>
    </transition>
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
const err = ref(null)

const updateView = (newView) => {
  view.value = newView
  localStorage.setItem('viewMode', newView)
}

const viewAlbum = (album) => {
  selectedAlbum.value = album
  view.value = 'single'
  localStorage.setItem('viewMode', 'single')
  localStorage.setItem('selectedAlbum', JSON.stringify(album))
}

const goBack = () => {
  view.value = 'list'
  selectedAlbum.value = null
  localStorage.setItem('selectedAlbum', null)
}

const fetchAlbumData = async () => {
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
    err.value = 'Error fetching album data.'
    console.log(err.value)
    console.error('Error fetching album data:', error)
  }
}

onMounted(() => {
  fetchAlbumData()
  const savedView = localStorage.getItem('viewMode') || 'list'
  const savedAlbum = localStorage.getItem('selectedAlbum') || null
  if (savedView) {
    view.value = savedView
  }
  if (savedAlbum && savedView === 'single') {
    selectedAlbum.value = JSON.parse(savedAlbum)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
