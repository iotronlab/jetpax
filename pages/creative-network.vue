<template>
  <v-container>
    <!-- Nav bar right -->
    <v-navigation-drawer v-model="drawer" permanent fixed absolute right>
      <v-list-item
          v-for="(item, i) in items"
          :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
            <v-list-item-subtitle>
              <v-col>
                <v-select
                  :items="item.menu"
                  :label= "item.title"
                  v-model="item.title"
                  solo
                ></v-select>
              </v-col>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-btn block @click="submit" color="red"> Filter </v-btn>
    </v-navigation-drawer>


    <h1 >
      Hello INFLUENCERS
    </h1>
    <v-row no-gutters>
      <v-col cols=3 v-for="(creator,i) in creators" :key="i">
        <CreatorCard  :creator= creator />
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default  {
  data() {
    return {

      showFilter : 'true',
      filterOpions : [],
      Language: '',
      Category: '',
      Gender: '',
      Social: '',
      params :{

      },
      creators : {},
      items: [
        {
          title: 'Language',
          menu : ['English' , 'Hindi'],
        },
        {
          title: 'Follower',
          menu : ['More than 100', 'More than 250', 'More than 500'],
        },
        {
          title: 'Social',
          menu : ['Facebook', 'Instagram', 'Twitter'],
        },
        {
          title: 'Category',
          menu : ['Health and Fitness', 'Beauty and Cosmetics', 'Travel'],
        },
      ],
    }
  },
  async fetch(){
    await this.$axios
      .$get("creator",{
        params: {
          followers: "500",
          languages: "english"
        }
        }).then((res) => {
        this.creators = res.data
      }).catch((err) => {
        console.log(err)
      });
  },
  methods: {
    async submit() {
      console.log(this.Category);
      console.log(this.Language);
    },
  }
}
</script>

