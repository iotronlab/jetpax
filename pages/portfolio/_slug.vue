<template>
  <div>
    <v-container v-if="$fetchState.pending"></v-container>
    <v-container v-else>
      <h1 class="text-h4">Posts</h1>
      <v-divider class="my-2"></v-divider>
      <div>
        <h2>Client Name:</h2>
        <p class="text-justify">{{ portfolio.name }}</p>
        <h2>Client Brief:</h2>
        <p class="text-justify">{{ portfolio.client_brief }}</p>
        <h2>Project Description:</h2>
        <p class="text-justify">{{ portfolio.project_description }}</p>
        <!-- <v-img height="500px" width="500px">
          {{ portfolio.images }}
        </v-img> -->
        <PortfolioImages v-bind:images="portfolio.images" />
      </div>
      <v-divider class="my-2"></v-divider>
      <div v-for="(post, i) in portfolio.posts" :key="i" class="posts">
        <h2>Post Name:</h2>
        <p class="text-justify">{{ post.name }}</p>
        <h2>Post Content:</h2>
        <p class="text-justify">{{ post.content }}</p>
        <!-- <v-img height="500px" width="500px">
          {{ post.images }}
        </v-img> -->
        <hr />
      </div>
    </v-container>
    <!-- <Footer /> -->
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