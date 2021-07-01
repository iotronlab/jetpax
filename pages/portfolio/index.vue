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
    <div class="justify-center">
      <PortfolioBreadcrumb />
    </div>
    <v-divider class="my-2"></v-divider>
    <h1 class="text-h4">Portfolios</h1>
    <v-divider class="my-2"></v-divider>

    <v-row
      class="mb-16"
      no-gutters
      v-for="(portfolio, i) in portfolios"
      :key="i"
    >
      <v-col cols="12" md="4">
        <h2 class="text-overline">Name</h2>
        <h3 class="text-body-1">{{ portfolio.name }}</h3>
        <br />
        <h2 class="text-overline">Client Brief</h2>
        <h3 class="text-body-1">{{ portfolio.client_brief }}</h3>
        <br />
        <h2 class="text-overline">Project Description</h2>
        <h3 class="text-body-1">{{ portfolio.project_description }}</h3>
        <br />
        <h2 class="text-overline">Tools</h2>
        <v-chip>{{ portfolio.tools }}</v-chip>
        <br />
        <div class="text-center">
          <v-btn
            rounded
            color="purple"
            dark
            outlined
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
      </v-col>
      <v-col cols="12" md="8" :order-md="i % 2 == 0 ? 'first' : null">
        <PortfolioImages v-bind:images="portfolio.images" />
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
