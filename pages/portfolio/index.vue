<template>
  <!-- <v-container>
    <p>
      {{ portfolios }}
    </p>
    <v-row no-gutters>
      <PortfolioCard v-bind:portfolios="portfolios" />
    </v-row>
  </v-container> -->
  <!-- <p>
      {{ portfolios }}
    </p> -->

  <!-- <v-row v-for="(portfolio, i) in portfolios" :key="i">
      <v-col cols="12" md="6">
        <h3>Name:</h3>
        <h5>{{ portfolio.name }}</h5>
        <h3>Client Brief:</h3>
        <h5>{{ portfolio.client_brief }}</h5>
        <h3>Project Description:</h3>
        <h5>{{ portfolio.project_description }}</h5>
      </v-col>
      <v-col cols="12" md="6">
        <PortfolioImages v-bind:images="portfolio.images" />
      </v-col>
    </v-row> -->

  <v-container>
    <section v-if="$fetchState.pending">
      <Loading message="fetching portfolio..." />
    </section>

    <section v-else>
      <div class="justify-center">
        <Breadcrumb :breadcrumbItems="breadcrumbItems" />
      </div>
      <v-divider class="my-2"></v-divider>
      <v-item-group mandatory v-model="portfolioOption">
        <v-row no-gutters justify="center">
          <v-col
            v-for="(option, i) in portfolioOptions"
            :key="i"
            cols="6"
            md="3"
            class="pa-2"
          >
            <v-item v-slot="{ active, toggle }">
              <v-sheet
                @click="toggle"
                rounded="xl"
                class="py-2 text-center text-uppercase"
                :class="active ? 'nucard' : null"
                color="transparent"
                height="100%"
              >
                <div v-if="active" class="flex-grow-1">
                  <h2
                    class="text-button ma-1 primary--text"
                    style="letter-spacing: 0.1rem !important; line-height: 95%"
                  >
                    <strong>{{ option.heading }}</strong>
                  </h2>
                  <v-btn text disabled class="caption">viewing</v-btn>
                </div>

                <div v-if="!active" class="flex-grow-1">
                  <h2
                    class="text-button ma-1"
                    style="letter-spacing: 0.1rem !important; line-height: 95%"
                  >
                    {{ option.heading }}
                  </h2>
                  <v-btn text class="caption">view</v-btn>
                </div>
              </v-sheet>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>

      <v-divider class="my-2"></v-divider>
      <v-window v-model="portfolioOption">
        <v-window-item
          :key="portfolioOptions[0]"
          transition="slide-y-transition"
        >
          <v-row no-gutters justify="center">
            <v-col
              cols="12"
              lg="5"
              class="pa-2"
              v-for="(portfolio, i) in portfolios"
              :key="i"
            >
              <v-img
                :src="
                  portfolio.images[0] != null
                    ? portfolio.images[0].url
                    : require('@/assets/img/logo.webp')
                "
                contain
                :aspect-ratio="4 / 3"
                gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                class="rounded-lg"
                dark
              >
                <v-container>
                  <v-row no-gutters justify="space-between" class="ma-1">
                    <h2 class="text-h5">
                      <span class="text-overline">Project</span><br />{{
                        portfolio.name
                      }}
                    </h2>
                    <v-btn
                      class="btn-agency mb-4"
                      dark
                      small
                      rounded
                      :to="{
                        name: 'portfolio-slug',
                        params: {
                          slug: portfolio.url,
                        },
                      }"
                    >
                      View
                    </v-btn>
                  </v-row>

                  <!-- <h2 class="text-overline text--secondary">Client Brief</h2>
            <h3 class="text-body-1">{{ portfolio.client_brief }}</h3>
            <br />
            <h2 class="text-overline text--secondary">Project Description</h2>
            <h3 class="text-body-1">{{ portfolio.project_description }}</h3>
            <br /> -->
                </v-container>
              </v-img>
              <!-- <h2 class="text-overline text--secondary">Tools</h2>
          <v-row no-gutters v-if="portfolio.tools != null">
            <v-chip
              v-for="(tool, i) in portfolio.tools"
              :key="i"
              class="ma-1"
              outlined
              >{{ tool }}</v-chip
            >
          </v-row> -->
              <!-- <PortfolioImages v-bind:images="portfolio.images" /> -->
            </v-col>
          </v-row>
          <div class="text-center">
            <v-pagination
              v-model="pageData.current_page"
              :length="pageData.last_page"
              :next-icon="nextArrow"
              :prev-icon="prevArrow"
            ></v-pagination>
          </div>
        </v-window-item>
        <v-window-item
          :key="portfolioOptions[1]"
          transition="slide-y-transition"
          >Hi</v-window-item
        >
      </v-window>
    </section>
  </v-container>
  <!-- <v-col cols="12" lg="10" class="mx-auto">
      <v-row no-gutters>
        <PortfolioCard v-bind:portfolios="portfolios" />
        <PortfolioImages v-bind:images="portfolios.images" />
      </v-row>
    </v-col> -->
</template>
<script>
import { mdiArrowRight } from '@mdi/js'
import { mdiArrowLeft } from '@mdi/js'

export default {
  head() {
    return {
      title: 'Portfolio',
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: 'My custom description'
      //   }
      // ]
    }
  },
  data() {
    return {
      portfolioOption: null,
      portfolioOptions: [
        { heading: 'Case Studies' },
        { heading: 'Sketchbook' },
      ],
      portfolios: {},
      pageData: {},
      nextArrow: mdiArrowRight,
      prevArrow: mdiArrowLeft,
      breadcrumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'Portfolio',
          disabled: false,
          to: 'portfolio',
        },
      ],
    }
  },

  async fetch() {
    await this.$axios
      .$get('portfolios')
      .then((res) => {
        this.portfolios = res.data
      })
      .catch((err) => {
        console.log(err)
      })

    await this.$axios
      .$get('portfolios')
      .then((res) => {
        this.pageData = res.meta
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
