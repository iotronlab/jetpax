<template>
  <v-container>
    <h1 >
      Hello INFLUENCERS
    </h1>
    <v-row no-gutters>
      <v-col cols=3 v-for="(portfolio,i) in portfolios" :key="i">
        <CreatorCard  :creator  = portfolio />
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default  {
  data() {
    return {
      portfolios : {},
    }
  },

  async fetch(){
    await this.$axios
      .$get("portfolio")
      .then((res) => {
        this.portfolios = res.data
      }).catch((err) => {
        console.log(err)
      });
  },

}
</script>
