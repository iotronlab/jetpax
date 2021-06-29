<template>
  <!-- <v-container>{{creator}}</v-container> -->
  <v-container>
    <v-row justify="space-around">
      <!-- {{creator}} -->
      <v-card class="mt-5">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              />
            </v-avatar>
            <p class="ml-3">
              {{ creator.name }}
            </p>
          </v-card-title>
        </v-img>
        <div class="font-weight-bold ml-5 mb-2 mt-3">
          <v-icon large color="blue light-2"> mdi-email </v-icon
          >{{ creator.email }}
        </div>
        <div class="font-weight-bold ml-5 mb-2 mt-2">
          <v-icon large color="green light-2"> mdi-dialpad </v-icon>
          {{ creator.contact }}
        </div>
        <div class="font-weight-bold ml-5 mb-2 mt-2">
          <v-icon large color="white light-2"> mdi-translate </v-icon>
          <span v-for="(lang, i) in creator.language" :key="i">
            {{ lang }}</span
          >
        </div>
        <div class="font-weight-bold ml-5 mb-2 mt-2">
          <v-icon large color="white light-2"> mdi-trending-up </v-icon>
          {{ creator.max_follower }}
        </div>
        <div class="font-weight-bold ml-5 mb-2 mt-2">
          <v-icon large color="white light-2"> mdi-facebook </v-icon>
          {{ creator.socials }}
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      creator: null,
    }
  },

  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`creator/${params.slug}`)

    return {
      creator: response.data,
    }
  },
}
</script>
