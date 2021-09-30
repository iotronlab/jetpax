<template>
  <v-container fluid class="pa-0">
    <v-row
      no-gutters
      justify="center"
      v-for="(video, i) in videos"
      :key="i"
      class="py-2"
    >
      <iframe
        id="ytplayer"
        type="text/html"
        :src="video.url + '?modestbranding'"
        width="100%"
        :height="$vuetify.breakpoint.smAndDown ? 360 : 720"
        frameborder="0"
      ></iframe>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    videos: {
      type: Array,
      required: false,
    },
  },
}
</script>

