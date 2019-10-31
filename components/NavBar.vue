<template>
  <div class="flex justify-end back-color">
    <ul class="flex w-full md:w-1/3 md:pr-8 z-50">
      <li class="flex-1">
        <nuxt-link
          class="text-center font-bold block py-2 px-4 inactive"
          exact-active-class="active"
          to="/"
          >Portfolio</nuxt-link
        >
      </li>
      <li class="flex-1">
        <nuxt-link
          class="text-center font-bold block py-2 px-4 inactive"
          exact-active-class="active"
          to="/posts"
          >Posts</nuxt-link
        >
      </li>
      <!-- <li class="text-center flex-1">
        <a class="block py-2 px-4 text-gray-400 cursor-not-allowed"
          >Cool stuff!</a
        >
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
.back-color {
  background-color: #2b2948;
}
.active {
  color: #fff !important;
  border-color: #4fd1c5 !important;
  background-color: #4fd1c5 !important;
}

.inactive {
  color: #fff;
  border-color: #fff;
  background-color: transparent;
}

.active:hover {
  background-color: #2c7a7b !important;
  border-color: #2c7a7b !important;
}

.inactive:hover {
  border-color: #edf2f785;
  background-color: #edf2f785;
}
</style>