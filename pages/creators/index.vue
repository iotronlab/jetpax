<template>
  <v-container>
    <h1 class="text-h4">
      <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
      Why choose <span class="font-weight-bold">JETPAX</span>?
    </h1>
    <h4 class="subtitle-1">
      Here, at JETPAX, we help you monetize your social media followers, by
      connecting you with various brands and their marketing campaigns. We also
      handle all your business needs, so that you are free to do what you do
      best, that is, create awesome content.
    </h4>

    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" md="5" v-for="(service, i) in services" :key="i">
        <v-img :src="service.img" contain height="30rem"></v-img>
        <v-card class="card-overlap pa-2 ma-2" dark>
          <h2 class="text-button font-weight-bold creator--text">
            {{ service.title }}
          </h2>
          <h3 class="text-body-1">
            {{ service.desc }}
          </h3></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Creator Services',
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
      services: [
        {
          title: 'Personal Manager',
          desc: `Jetpax offers our creators and influencers a personal manager who takes care of Brand collaboration. The personal manager is
          responsible for managing the end-to-end operations of a brand's influencer marketing campaigns. As a result, we enable content creators
          to do what they love and do best, relieving them from tedious works like spam filtering and post-production works.`,
          img: require('@/assets/img/personal-manager.png'),
        },
        {
          title: 'Promotional Portfolio',
          desc: `Jetpax offers a promotional portfolio to its influencers and content creators at www.jetpax.org/username. We showcase their
          promotional content, directly integrated from their Social media accounts. In addition, all their data, such as the number of followers
          and service charges, are displayed at our specially curated Portfolio, which directly benefits the influencer based on optimised search
          engine results.`,
          img: require('@/assets/img/portfolio.png'),
        },
        {
          title: 'Customised Content Creation',
          desc: `Our Design team offers to enhance and provide aesthetically eye-catching graphic content for the influencers and creators. Drive
          your social media followers with our attractive sponsored post designs. From Social Media posts to promotional animation content, we provide
          for all your design needs and supports.`,
          img: require('@/assets/img/content-creation.png'),
        },
        {
          title: 'Personal Growth Strategy',
          desc: `Build a happy community with our Influencer growth strategy. Be Genuine, Accessible, and Responsive while building your online presence.
          Grow your fan base with our personalised Short & Long term strategies that enable you to collaborate with various brands effectively. Monitor
          your success with Jetpax.`,
          img: require('@/assets/img/growth-strategy.png'),
        },
      ],
    }
  },
}
</script>
