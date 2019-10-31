<template>
  <div class="container">
    <article>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      posts: [
        {
          id: 'first',
          title: 'Learning Vue',
          body: 'Hello this is my first post!'
        },
        {
          id: 'second',
          title: 'Ditching Vue',
          body: 'Hello this is my second post!'
        }
      ]
    }
  },
  computed: {
    post() {
      return this.posts.find(post => post.id === this.id)
    }
  }
}
</script>

<style>
</style>