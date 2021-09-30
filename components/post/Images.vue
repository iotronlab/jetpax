<template>
  <v-container fluid class="pa-0">
    <v-img
      v-for="(image, i) in imageList"
      :key="i"
      :src="image.url"
      :aspect-ratio="4 / 3"
      alt="Post Image"
      class="mx-lg-2 my-2"
    ></v-img>
  </v-container>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: false,
    },
  },
  computed: {
    imageList() {
      if (!this.images || this.images.length == 0) {
        this.images.push({ url: require('@/assets/img/logo.webp') })
      }
      return this.images
    },
  },
}
</script>

