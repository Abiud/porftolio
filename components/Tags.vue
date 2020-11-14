<template>
  <div class="flex flex-wrap my-2">
    <div
      v-for="tag in tags"
      :key="tag"
      class="tags rounded-lg shadow-sm text-xs mr-2 py-1 px-2 mt-1 xxl:text-2xl"
    >
      {{ tag }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['tags']
}
</script>

<style>
</style>