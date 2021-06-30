<template>
  <div>
    <v-container v-if="$fetchState.pending"></v-container>
    <v-container v-else>
      <h1 class="text-h4">Posts</h1>
      <v-divider class="my-2"></v-divider>
      <div v-for="(post, i) in portfolio.posts" :key="i" class="posts">
        <h2>Post Name:</h2>
        <p class="text-justify">{{ post.name }}</p>
        <h2>Post Content:</h2>
        <p class="text-justify">{{ post.content }}</p>
        <hr />
      </div>

      <!-- <h3>Posts</h3> -->
    </v-container>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: null,
    }
  },

  // head() {
  //   return {
  //     title: this.portfolio.name,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.portfolio.project_description,
  //       },
  //     ],
  //   }
  // },

  async fetch() {
    await this.$axios
      .$get(`portfolios/${this.$route.params.slug}`)
      .then((res) => {
        this.portfolio = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // async asyncData({ params, app }) {
  //   let response = await app.$axios.$get(`portfolios/${params.slug}`)
  //   return {
  //     portfolio: response.data,
  //   }
  // },
}
</script>

<style scoped>
.posts {
  height: 180px;
  width: auto;
  align-self: center;
}
</style>