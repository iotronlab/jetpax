<template>
  <!-- <v-container>{{creator}}</v-container> -->

  <v-card rounded="lg" class="pb-4">
    <v-img
      height="10rem"
      src="cover.png"
      gradient="to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px"
      dark
    >
      <v-row no-gutters class="fill-height" align="end">
        <h4 class="text-overline ml-4">{{ creator.name }}</h4>
      </v-row></v-img
    >
    <v-row no-gutters>
      <v-col cols="6">
        <h6 class="text-caption ml-4 mt-1">
          Max followers
          asjhasgavsajksajkhshajkkkkksajsalkskal;sakslaushajshaklskjalsuakusyynaljKJSNAKSYAJHDACKALJDAKJ
        </h6></v-col
      ><v-col cols="6">
        <v-img
          src="profile.png"
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
        class="mx-1"
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
        class="mx-1"
        v-for="(category, i) in creator.categories"
        :key="i"
      >
        {{ category }}</v-chip
      >
    </h4>
    <h4 class="caption ml-2 mt-2">
      Socials
      <v-chip class="mx-1" v-for="(social, i) in creator.socials" :key="i">
        <v-icon left v-if="social.type == 'Facebook'"> mdi-facebook </v-icon>
        <v-icon left v-if="social.type == 'Instagram'"> mdi-instagram </v-icon>
        {{ social.type }}</v-chip
      >
    </h4>
  </v-card>
</template>
<script>
export default {
  props: {
    creator: {
      type: Object,
      required: true,
    },
  },
}
</script>
