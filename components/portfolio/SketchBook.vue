<template>
  <v-container fluid>
    <section v-if="$fetchState.pending">
      <Loading message="fetching sketchbook..." />
    </section>
    <section v-else-if="errorMessage != null">
      <LazyFetchError />
    </section>
    <section v-else>
      <section v-if="posts.length < 1">
        <v-card height="480" rounded="xl" class="text-center">
          <h1 class="text-body-1 pa-2 pt-4">
            There is no data in your sketchbook.
          </h1></v-card
        >
      </section>
      <section v-else>
        <PostCard :posts="posts" />
        <div class="text-center">
          <v-pagination
            v-model="pageData.current_page"
            :length="pageData.last_page"
            :next-icon="nextArrow"
            :prev-icon="prevArrow"
            @input="updateQuery(pageData.current_page)"
          ></v-pagination>
        </div>
      </section>
    </section>
  </v-container>
</template>

<script>
import { mdiArrowRight } from '@mdi/js'
import { mdiArrowLeft } from '@mdi/js'

export default {
  data() {
    return {
      posts: {},
      pageData: {},
      errorMessage: null,
      nextArrow: mdiArrowRight,
      prevArrow: mdiArrowLeft,
    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  async fetch() {
    try {
      await this.$axios
        .$get('posts', { params: this.$route.query })
        .then((res) => {
          this.posts = res.data
          this.pageData = res.meta
        })
        .catch((err) => {
          this.errorMessage = err
          this.$sentry.captureException(new Error(err))
        })
    } catch (error) {
      this.$sentry.captureException(new Error(error))
    }
  },
  methods: {
    updateQuery(data) {
      this.$router.push({ query: { page: data } })
    },
  },
}
</script>
