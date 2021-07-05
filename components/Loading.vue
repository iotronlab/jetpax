<template>
  <v-layout align-center justify-center column>
    <v-flex row align-center>
      <v-progress-circular
        indeterminate
        :width="7"
        :size="70"
        color="primary"
      ></v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>

<style scoped>
.v-progress-circular {
  margin: 50px;
}
</style>