<template>
  <v-container>
    <!-- Nav bar right -->
    <v-navigation-drawer permanent fixed absolute right>
      <v-list-item
          v-for="(filter, i) in filterMenu"
          :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="filter.admin_name" />
            <v-list-item-subtitle>
              <v-col>
                <v-select
                  :items="filter.options"
                  item-text="admin_name"
                  item-value="admin_name"
                  label="Select"
                  @change="filterUpdate"
                  return-object
                >
              </v-select>
              </v-col>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-btn block @click="submit" color="red"> Filter </v-btn>
        <v-btn class="mt-4" block @click="reset" color="red"> Reset </v-btn>
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
      filterMenu : {},
      filterParams :{},
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
        params: {}
        }).then((res) => {
        this.creators = res.data
      }).catch((err) => {
        console.log(err)
      });

    await this.$axios
      .$get("filter")
      .then((ress) => {
        this.filterMenu = ress.data
      }).catch((err) => {
        console.log(err)
      });
  },


  methods: {
    async submit() {
      await this.$axios
      .$get("creator",{
        params: this.filterParams
        }).then((res) => {

          this.$router.push({ query: this.filterParams })
          this.creators = res.data

      }).catch((err) => {
        console.log(err)
      });
    },

    filterUpdate(data){
      this.filterParams[data.filter_code] = data.admin_name
      // this.$router.push({ query: this.filterParams })
    },

    reset(){
      this.filterParams = {}
      this.$router.push({ query: this.filterParams })
      this.$fetch();
    }
  }
}
</script>

