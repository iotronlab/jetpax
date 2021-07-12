<template>
  <section>
    <v-row no-gutters class="mt-2">
      <v-col v-for="(image, i) in imageList" :key="i" cols="12" lg="6">
        <v-img :src="image.url" alt="Post Image"></v-img
      ></v-col>
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

