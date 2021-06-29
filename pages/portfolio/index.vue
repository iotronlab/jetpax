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
  <v-container>
    <h1 class="text-h4">Portfolios</h1>
    <v-divider class="my-2"></v-divider>
    <div class="justify-center">
      <PortfolioBreadcrumb />
    </div>
    <v-divider class="my-2"></v-divider>
    <br />
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
    <v-row
      class="mb-6"
      no-gutters
      v-for="(portfolio, i) in portfolios"
      :key="i"
    >
      <v-col sm="5" md="6">
        <v-card class="pa-2" outlined tile>
          <h3>Name:</h3>
          <h5 class="subtitle-2">{{ portfolio.name }}</h5>
          <br />
          <h3>Client Brief:</h3>
          <h5>{{ portfolio.client_brief }}</h5>
          <br />
          <h3>Project Description:</h3>
          <h5>{{ portfolio.project_description }}</h5>
          <br />
          <h3>Tools:</h3>
          <v-chip>{{ portfolio.tools }}</v-chip>
          <br />
          <div class="text-center">
            <v-btn
              rounded
              color="primary"
              dark
              :to="{
                name: 'portfolio-slug',
                params: {
                  slug: portfolio.id,
                },
              }"
            >
              View
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <v-card class="pa-2" outlined tile>
          <PortfolioImages v-bind:images="portfolio.images" />
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        v-model="pageData.current_page"
        :length="pageData.last_page"
      ></v-pagination>
    </div>
  </v-container>
  <!-- <v-col cols="12" lg="10" class="mx-auto">
      <v-row no-gutters>
        <PortfolioCard v-bind:portfolios="portfolios" />
        <PortfolioImages v-bind:images="portfolios.images" />
      </v-row>
    </v-col> -->
</template>
<script>
export default {
  data() {
    return {
      portfolios: {},
      pageData: {},
    }
  },

  async fetch() {
    await this.$axios
      .$get('portfolio')
      .then((res) => {
        this.portfolios = res.data
      })
      .catch((err) => {
        console.log(err)
      })

    await this.$axios
      .$get('portfolio')
      .then((res) => {
        this.pageData = res.meta
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
