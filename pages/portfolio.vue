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
    <v-row v-for="(portfolio, i) in portfolios" :key="i">
      <v-col cols="12" md="6">
        <h3>Name:</h3>
        <h5>{{ portfolio.name }}</h5>
        <h3>Client Brief:</h3>
        <h5>{{ portfolio.client_brief }}</h5>
        <h3>Project Description:</h3>
        <h5>{{ portfolio.project_description }}</h5>
      </v-col>
      <v-col cols="12" md="6">
        <PortfolioImages v-bind:images="portfolios.images" />
      </v-col>
    </v-row>
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
  },
}
</script>
