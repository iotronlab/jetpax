<template>
  <div>
    <v-row no-gutters v-for="(post, i) in posts" :key="i" justify="center">
      <v-col cols="12" lg="3">
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
        <v-btn
          color="ma-2 btn-creator"
          :to="{
            name: 'sketchbook-slug',
            params: {
              slug: post.uuid,
            },
          }"
        >
          <v-icon left>{{ icon.view }}</v-icon> view</v-btn
        >
      </v-col>
      <v-col cols="12" lg="8" :order-lg="i % 2 == 0 ? 'first' : null">
        <PostImages :images="post.images" />
        <PostVideos :videos="post.video_url"
      /></v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiEye } from '@mdi/js'
export default {
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      icon: {
        view: mdiEye,
      },
    }
  },
}
</script>


