<template>
  <v-container>
    <section v-if="$fetchState.pending">
      <Loading />
    </section>

    <section v-else>
      <v-divider class="my-2"></v-divider>
      <h1 class="text-h4">Sketch Book - {{ post.name }}</h1>
      <v-divider class="my-2"></v-divider>

      <v-row
        no-gutters
        v-for="(post, i) in post.posts"
        :key="i"
        justify="center"
      >
        <PostImages :images="post.images" />
        <PostVideos :videos="post.video_url" />
        <v-col cols="12">
          <h1 class="text-h4 text-uppercase primary--text">{{ post.name }}</h1>
          <v-divider class="my-2"></v-divider>

          <h2 class="font-weight-light text--secondary">{{ post.content }}</h2>
          <v-row
            no-gutters
            v-if="post.external_url != null"
            align="center"
            class="my-4"
          >
            <h2 class="text-button text--secondary mr-2">External Link</h2>
            <v-btn
              v-for="(url, i) in post.external_url"
              :key="i"
              class="ma-1 btn-creator"
              :href="url.url"
              target="_href"
              rounded
              dark
              >{{ url.site }}</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      post: null,
    }
  },

  // head() {
  //   return {
  //     title: this.post.name,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.post.project_description,
  //       },
  //     ],
  //   }
  // },

  async fetch() {
    await this.$axios
      .$get(`posts/${this.$route.params.slug}`)
      .then((res) => {
        this.post = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // async asyncData({ params, app }) {
  //   let response = await app.$axios.$get(`posts/${params.slug}`)
  //   return {
  //     post: response.data,
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
