<template>
  <v-container>
    <section v-if="$fetchState.pending"></section>
    <section v-else>
      <v-container fluid class="pa-0">
        <v-img
          :aspect-ratio="$vuetify.breakpoint.smAndUp ? 16 / 2.5 : 16 / 9"
          :src="
            creator.coverimg
              ? creator.coverimg
              : require('@/assets/img/default-cover.webp')
          "
          :lazy-src="require('@/assets/img/default-cover.webp')"
        />

        <v-row no-gutters>
          <v-col cols="12" lg="4" md="4">
            <v-container fluid class="d-flex justify-center">
              <v-avatar size="200" class="mt-n16">
                <v-img
                  :src="
                    creator.avatarimg
                      ? creator.avatarimg
                      : require('@/assets/img/profile.png')
                  "
                ></v-img
              ></v-avatar>
            </v-container>

            <!-- <v-row no-gutters>
                <v-col class="flex-grow-0 flex-shrink-1"
                  ><v-card
                    :img="
                      creator.avatarimg
                        ? creator.avatarimg
                        : require('@/assets/img/default-profile.png')
                    "
                    width="150"
                    height="150"
                    color="accent"
                    class="ml-lg-12 ml-4"
                  ></v-card></v-col
                ><v-col class="flex-grow-1 flex-shrink-0">
                  <v-btn small class="ml-2" color="secondary" @click.prevent=""
                    >Follow</v-btn
                  >
                  <v-container fluid>
                    <h5 class="subtitle-1">{{ creator.display_name }}</h5>
                    <h4 class="subtitle-2">{{ creator.views }} views</h4>

                    <h4 class="subtitle-2">{{ creator.views }} subs</h4>
                  </v-container></v-col
                ></v-row
              > -->
          </v-col>
          <v-col cols="12" lg="4" md="4" order-md="first">
            <v-container fluid class="text-center text-lg-right">
              <h1 class="title">
                <!-- {{ creator.display_name }} -->

                Artify Creator
              </h1>
              <h4 class="caption mb-2">
                {{ creator.views }}10K subs | 10K views
              </h4>
              <v-row
                no-gutters
                align="center"
                justify="center"
                justify-lg="end"
                class="mb-4"
              >
                <v-hover v-slot="{ hover }">
                  <v-btn
                    class="ml-2"
                    color="primary"
                    @click.prevent=""
                    :outlined="hover ? false : true"
                    rounded
                  >
                    <v-icon left>mdi-bell-plus-outline</v-icon> Subscribe</v-btn
                  ></v-hover
                >
              </v-row>

              <v-row
                no-gutters
                align="center"
                justify="center"
                justify-lg="end"
              >
                <v-hover v-slot="{ hover }">
                  <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    :outlined="hover ? false : true"
                    class="mx-1"
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn></v-hover
                >
                <v-hover v-slot="{ hover }">
                  <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    :outlined="hover ? false : true"
                    class="mx-1"
                  >
                    <v-icon>mdi-whatsapp</v-icon>
                  </v-btn></v-hover
                >
                <v-hover v-slot="{ hover }">
                  <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    :outlined="hover ? false : true"
                    class="mx-1"
                  >
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn> </v-hover
                ><v-hover v-slot="{ hover }">
                  <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    :outlined="hover ? false : true"
                    class="mx-1"
                  >
                    <v-icon>mdi-pinterest</v-icon>
                  </v-btn> </v-hover
                ><v-hover v-slot="{ hover }">
                  <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    :outlined="hover ? false : true"
                    class="ml-1"
                  >
                    <v-icon>mdi-email</v-icon>
                  </v-btn>
                </v-hover>
              </v-row>
            </v-container>
          </v-col>

          <v-col cols="12" lg="4" md="4">
            <v-container fluid class="px-3">
              <h5 class="caption text--secondary">About the Artist</h5>
              <h4 class="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo dolores, earum maiores dolorem quod velit voluptas accusamus
                nostrum minus quaerat dolor totam illum voluptate itaque
                laboriosam distinctio! Asperiores, hic?
                {{
                  creator.bio
                    ? creator.bio
                    : 'This artist has not updated bio yet.'
                }}
              </h4>
            </v-container>
          </v-col>
        </v-row>
        <!-- <MiniProfile :creator="creator" /> --></v-container
      >
    </section>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      creator: null,
    }
  },

  async fetch() {
    await this.$axios
      .$get(`creators/${this.$route.params.slug}`)
      .then((res) => {
        this.creator = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // async asyncData({ params, app }) {
  //   let response = await app.$axios.$get(`creator/${params.slug}`)

  //   return {
  //     creator: response.data,
  //   }
  // },
}
</script>
