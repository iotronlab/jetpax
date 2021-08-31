<template>
  <v-container>
    <v-row no-gutters justify="center" v-for="(video, i) in videos" :key="i">
      <iframe
        id="ytplayer"
        type="text/html"
        :src="video.url + '?modestbranding'"
        width="100%"
        height="720"
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
      required: true,
    },
  },
}
</script>

