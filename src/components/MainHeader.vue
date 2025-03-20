<template>
  <div class="pt-16">
    <h1 class="font-serif text-xl">
      <b>Albums</b> <span class="text-gray-400">({{ count }})</span>
    </h1>
    <hr class="border-t-1 border-gray-200" />
  </div>
</template>
<script setup>
defineProps({
  count: Number,
})
</script>
<style></style>
