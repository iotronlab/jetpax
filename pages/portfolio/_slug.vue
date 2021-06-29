<template>
  <div>
    <div v-for="(post, i) in portfolio.posts" :key="i">
      <h2>Post Name:</h2>
      <h4>{{ post.name }}</h4>
      <h2>Post Content:</h2>
      <p>{{ post.content }}</p>
      <p>Created at: {{ post.created_at }}</p>
      <p>Updated at: {{ post.updated_at }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: null,
    }
  },
  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`portfolio/${params.slug}`)
    return {
      portfolio: response.data,
    }
  },

  // async asyncData() {
  //   const portfolio = await fetch('http://localhost:3000/portfolio').then(
  //     (res) => res.json()
  //   )
  //   return { portfolio }
  // },
  // async fetch() {
  //   await this.$axios
  //     .$get('portfolio', {
  //       params: {},
  //     })
  //     .then((res) => {
  //       this.portfolio = res.data
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // },
}
</script>
