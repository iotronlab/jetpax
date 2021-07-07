<template>
  <!-- <v-container>{{creator}}</v-container> -->

  <v-card rounded="lg" class="pb-4">
    <v-img
      height="10rem"
      :src="require('@/assets/img/default-cover.webp')"
      gradient="to top, rgba(0, 0, 0, 0.8) 0%, transparent 70%"
      dark
    >
      <v-row no-gutters class="fill-height" align="end">
        <v-col cols="6"
          ><h4 class="text-subtitle-2 ml-4">{{ creator.name }}</h4></v-col
        >
      </v-row></v-img
    >
    <v-row no-gutters>
      <v-col cols="6">
        <h6 class="text-caption ml-4 mt-1">
          Bio:
          {{ creator.short_bio }}
        </h6></v-col
      ><v-col cols="6">
        <v-img
          :src="require('@/assets/img/landing-image.webp')"
          max-width="150"
          :aspect-ratio="1 / 1"
          class="mt-n16 ml-auto mr-4 rounded-lg"
      /></v-col>
    </v-row>
    <h4 class="caption ml-2 mt-2">
      Languages
      <v-chip
        small
        label
        outlined
        class="ma-1"
        v-for="(lang, i) in creator.languages"
        :key="i"
      >
        {{ lang }}</v-chip
      >
    </h4>
    <h4 class="caption ml-2 mt-2">
      Categories
      <v-chip
        small
        label
        class="ma-1"
        v-for="(category, i) in creator.categories"
        :key="i"
      >
        {{ category }}</v-chip
      >
    </h4>
    <h4 class="caption ml-2 mt-2">
      Socials
      <v-chip
        class="ma-1"
        v-for="(social, i) in creator.socials"
        :key="i"
        :color="icons[social.type].color"
        dark
      >
        <v-icon left>
          {{ icons[social.type].link }}
        </v-icon>
        <!-- <v-icon left v-if="social.type == 'Instagram'"> mdi-instagram </v-icon> -->
        {{ social.type }} {{ formattedFollows(social.followers) }}</v-chip
      >
    </h4>
  </v-card>
</template>
<script>
import { mdiFacebook } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import { mdiYoutube } from '@mdi/js'
import { mdiTwitter } from '@mdi/js'
export default {
  props: {
    creator: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        Facebook: { link: mdiFacebook, color: '#1877f2' },
        Youtube: { link: mdiYoutube, color: '#FF0000' },
        Instagram: { link: mdiInstagram, color: '#7232bd' },
        Twitter: { link: mdiTwitter, color: '#1DA1F2' },
      },
    }
  },
  computed: {
    formattedFollows() {
      return (num) =>
        Math.abs(num) > 999
          ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
          : Math.sign(num) * Math.abs(num)
    },
  },
}
</script>
