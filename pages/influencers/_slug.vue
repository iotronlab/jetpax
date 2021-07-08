<template>
  <v-container>
    <section v-if="$fetchState.pending">
      <Loading />
    </section>
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

        <!-- <ul v-for="(service, i) in creator.services" :key="i">
          <li>
            {{ service.name }}
          </li>
        </ul> -->

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
              <Breadcrumb :breadcrumbItems="breadcrumbItems" />
              <h1 class="title">
                <!-- {{ creator.display_name }} -->

                {{ creator.name }}
              </h1>
              <v-row
                no-gutters
                align="center"
                justify="center"
                justify-lg="end"
                class="mb-4"
              >
                <v-hover v-slot="{ hover }">
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="mt-2"
                        color="agency"
                        @click.prevent=""
                        :outlined="hover ? false : true"
                        v-bind="attrs"
                        v-on="on"
                        rounded
                      >
                        <v-icon left>{{ icons.email }}</v-icon
                        >Enquire</v-btn
                      >
                    </template>
                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Enquire About
                      </v-card-title>
                      <v-divider class="my-2"></v-divider>
                      <v-text-field
                        v-model="name"
                        label="Name"
                        class="pa-2 ma-2"
                        filled
                        shaped
                      ></v-text-field>
                      <v-text-field
                        v-model="contact"
                        label="Contact"
                        class="pa-2 ma-2"
                        filled
                        shaped
                      ></v-text-field>
                      <v-text-field
                        v-model="businessName"
                        label="Business Name"
                        class="pa-2 ma-2"
                        filled
                        shaped
                      ></v-text-field>
                      <v-text-field
                        v-model="email"
                        label="Email"
                        class="pa-2 ma-2"
                        filled
                        shaped
                      ></v-text-field>

                      <v-select
                        :items="creator.services"
                        v-model="serviceSelect"
                        item-text="name"
                        item-value="name"
                        label="Services"
                        dense
                        :append-icon="dropdownIcon"
                        class="pa-2 ma-2"
                        filled
                        deletable-chips="true"
                        :clear-icon="removeIcon"
                        clearable
                        shaped
                        chips
                        multiple
                      >
                        <template v-slot:selection="{ item }">
                          <v-chip
                            close
                            :close-icon="removeIcon"
                            @click:close="remove(item)"
                          >
                            {{ item.name }}
                          </v-chip>
                        </template>
                      </v-select>
                      <v-textarea
                        v-model="description"
                        label="Description"
                        class="pa-2 ma-2"
                        filled
                        shaped
                      ></v-textarea>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                          send
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-hover>
              </v-row>

              <h4 class="caption">
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

              <!-- <v-row
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
                    <v-icon>{{ icons.facebook }}</v-icon>
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
                    <v-icon>{{ icons.whatsapp }}</v-icon>
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
                    <v-icon>{{ icons.twitter }}</v-icon>
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
                    <v-icon>{{ icons.pinterest }}</v-icon>
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
                    <v-icon>{{ icons.email }}</v-icon>
                  </v-btn>
                </v-hover>
              </v-row> -->
            </v-container>
          </v-col>

          <v-col cols="12" lg="4" md="4">
            <v-container fluid class="px-3">
              <h4 class="caption mt-2">
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
                  {{ social.type }}
                  {{ formattedFollows(social.followers) }}</v-chip
                >
              </h4>
              <h4 class="caption mt-2">
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
              <h5 class="caption text--secondary mt-4">About the Artist</h5>
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
      <h1>{{ creator.name }}<span>'s Services</span></h1>
      <v-card v-for="(service, i) in creator.services" :key="i">
        <v-card-title class="text-h5"> {{ service.name }}</v-card-title>

        <v-card-subtitle
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quo
          dolores, earum maiores dolorem quod velit voluptas accusamus nostrum
          minus quaerat dolor totam illum voluptate itaque laboriosam
          distinctio! Asperiores, hic?</v-card-subtitle
        >
        <v-divider></v-divider>
      </v-card>
    </section>
  </v-container>
</template>
<script>
import { mdiEmail } from '@mdi/js'
import { mdiWhatsapp } from '@mdi/js'
import { mdiFacebook } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import { mdiYoutube } from '@mdi/js'
import { mdiLinkedin } from '@mdi/js'
import { mdiPinterest } from '@mdi/js'
import { mdiTwitter } from '@mdi/js'
import { mdiMenuDown } from '@mdi/js'
import { mdiClose } from '@mdi/js'

export default {
  data() {
    return {
      dialog: false,
      dropdownIcon: mdiMenuDown,
      removeIcon: mdiClose,
      serviceSelect: [],
      creator: null,
      breadcrumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'Influencers',
          disabled: false,
          to: '/influencers',
          exact: true,
        },
        {
          text: this.$route.params.slug,
          disabled: true,
          to: '',
        },
      ],
      icons: {
        email: mdiEmail,
        whatsapp: mdiWhatsapp,
        linkedin: mdiLinkedin,
        pinterest: mdiPinterest,

        Facebook: { link: mdiFacebook, color: '#1877f2' },
        Youtube: { link: mdiYoutube, color: '#FF0000' },
        Instagram: { link: mdiInstagram, color: '#7232bd' },
        Twitter: { link: mdiTwitter, color: '#1DA1F2' },
      },
      socialLinks: [
        { icon: mdiFacebook, url: '' },
        { icon: mdiYoutube, url: '' },
        { icon: mdiInstagram, url: '' },
        { icon: mdiLinkedin, url: 'Privacy Policy' },
      ],
    }
  },

  methods: {
    remove(item) {
      this.serviceSelect.splice(this.serviceSelect.indexOf(item))
      this.serviceSelect = [...this.serviceSelect]
    },
  },

  computed: {
    formattedFollows() {
      return (num) =>
        Math.abs(num) > 999
          ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
          : Math.sign(num) * Math.abs(num)
    },
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
