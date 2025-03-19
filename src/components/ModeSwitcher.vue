<template>
  <div class="flex gap-4">
    <img
      v-if="currentView == 'list'"
      @click="updateView('list')"
      src="../assets/svg/List view_solid.svg"
      alt=""
    />
    <img v-else @click="updateView('list')" src="../assets/svg/List view_outline.svg" alt="" />

    <img
      v-if="currentView == 'card'"
      @click="updateView('card')"
      src="../assets/svg/Card view_solid.svg"
      alt=""
    />
    <img v-else @click="updateView('card')" src="../assets/svg/Card view_outline.svg" alt="" />
  </div>
</template>
<script setup>
defineProps({
  currentView: String,
})
const emit = defineEmits(['updateView'])

const updateView = (newView) => {
  emit('updateView', newView)
}
</script>
<style></style>
