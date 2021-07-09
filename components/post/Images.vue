<template>
  <section>
    <v-row no-gutters v-for="(image, i) in imageList" :key="i">
      <v-img :src="image.url" alt="Post Image"></v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
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

