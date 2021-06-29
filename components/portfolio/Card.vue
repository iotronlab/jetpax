<template>
  <!-- <div>
    <h1 v-for="(portfolio, i) in portfolios" :key="i">
      {{ portfolio.name }}
    </h1>
    <ul v-for="(portfolio, i) in portfolios" :key="i">
      <li>{{ portfolio.client_brief }}</li>
    </ul>
  </div> -->
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
        <h1>uefuhufu</h1>
        <h1>uefuhufu</h1>
        <h1>uefuhufu</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    portfolios: {
      type: Object,
      required: true,
    },
  },
}
</script>
