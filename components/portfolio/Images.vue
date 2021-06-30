<template>
  <div>
    <v-card elevation="24" max-width="444" class="mx-auto">
      <v-carousel hide-delimiters height="329">
        <v-carousel-item v-for="(image, i) in images" :key="i">
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>
