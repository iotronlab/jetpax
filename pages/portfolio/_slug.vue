<template>
  <v-container>
    <section v-if="$fetchState.pending">
      <Loading />
    </section>

    <section v-else>
      <Breadcrumb :breadcrumbItems="breadcrumbItems" />

      <v-divider class="my-2"></v-divider>
      <h1 class="text-h4">Case Study - {{ portfolio.name }}</h1>
      <v-divider class="my-2"></v-divider>

      <v-row no-gutters justify="center">
        <v-col cols="12" lg="3">
          <h2 class="text-overline text--secondary">Name</h2>
          <h3 class="text-body-1">{{ portfolio.name }}</h3>
          <br />
          <h2 class="text-overline text--secondary">Client Brief</h2>
          <h3 class="text-body-1">{{ portfolio.client_brief }}</h3>

          <h2
            class="text-overline text--secondary"
            v-if="portfolio.client_location"
          >
            Client Location
          </h2>
          <h3 class="text-body-1" v-if="portfolio.client_location">
            {{ portfolio.client_location }}
          </h3>
          <br />
          <h2 class="text-overline text--secondary">Project Description</h2>
          <h3 class="text-body-1">{{ portfolio.project_description }}</h3>
          <br />

          <v-row no-gutters v-if="portfolio.tools != null">
            <h2 class="text-overline text--secondary">Tools</h2>
            <v-chip
              v-for="(tool, i) in portfolio.tools"
              :key="i"
              outlined
              class="ma-1"
              >{{ tool }}</v-chip
            >
          </v-row>
          <v-row no-gutters v-if="portfolio.services != null">
            <h2 class="text-overline text--secondary">Services</h2>
            <v-chip
              v-for="(service, i) in portfolio.services"
              :key="i"
              outlined
              class="ma-1"
              >{{ service }}</v-chip
            >
          </v-row>
          <v-row no-gutters v-if="portfolio.external_url != null">
            <h2 class="text-overline text--secondary">External Link</h2>
            <v-btn
              v-for="(url, i) in portfolio.external_url"
              :key="i"
              class="ma-1 btn-creator"
              :href="url.url"
              target="_href"
              rounded
              >{{ url.site }}</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="12" lg="8">
          <PostImages :images="portfolio.images"
        /></v-col>
      </v-row>
      <v-divider class="my-2"></v-divider>
      <v-row
        no-gutters
        v-for="(post, i) in portfolio.posts"
        :key="i"
        justify="center"
      >
        <v-col cols="12" lg="3">
          <h1 class="text-h4 text--secondary">{{ post.name }}</h1>
          <v-divider class="my-2"></v-divider>

          <h1 class="font-weight-light">{{ post.content }}</h1>
          <v-row
            no-gutters
            v-if="post.external_url != null"
            align="center"
            class="mt-4"
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
        <v-col cols="12" lg="8" :order-lg="i % 2 == 0 ? 'first' : null">
          <PostImages :images="post.images" />
          <PostVideos :videos="post.video_url"
        /></v-col>
      </v-row>
    </section>
    <!-- <Footer /> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      portfolio: null,
      breadcrumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'Portfolios',
          disabled: false,
          to: '/portfolio',
          exact: true,
        },
        {
          text: this.$route.params.slug,
          disabled: true,
          to: '',
        },
      ],
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
