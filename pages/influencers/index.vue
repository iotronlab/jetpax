<template>
  <v-container fluid class="pa-0">
    <!-- Nav bar right -->
    <section v-if="$fetchState.pending">
      <Loading />
    </section>

    <section v-else>
      <div class="justify-center">
        <Breadcrumb :breadcrumbItems="breadcrumbItems" />
      </div>
      <v-divider class="my-2"></v-divider>
      <v-col cols="12" lg="10" class="mx-auto">
        <h1 class="text-h4">Our Influencers</h1>
        <v-divider class="my-2"></v-divider>
        <v-toolbar class="mb-2" rounded="lg">
          <v-select
            class="mr-2"
            :append-icon="dropdownIcon"
            v-for="(filter, i) in filterMenu"
            :key="i"
            :label="filter.admin_name"
            :items="filter.options"
            item-text="admin_name"
            item-value="admin_name"
            hide-details
            dense
            outlined
            rounded
            small-chips
            multiple
            cache-items
            deletable-chips
        /></v-toolbar>

        <v-row no-gutters
          ><h3 class="text-subtitle-1">Creators</h3>
          <v-spacer /><v-btn @click.stop="drawer = !drawer"
            >filter results</v-btn
          ></v-row
        >
        <v-row no-gutters>
          <v-col
            cols="12"
            lg="3"
            md="4"
            class="pa-1"
            v-for="(creator, i) in creators"
            :key="i"
          >
            <NuxtLink
              :to="{
                name: 'influencers-slug',
                params: {
                  slug: creator.url,
                },
              }"
            >
              <CreatorCard :creator="creator" />
            </NuxtLink>
          </v-col>
        </v-row>
      </v-col>
      <v-navigation-drawer v-model="drawer" fixed app temporary right>
        <v-list-item v-for="(filter, i) in filterMenu" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="filter.admin_name" />
            <v-list-item-subtitle>
              <v-select
                :items="filter.options"
                item-text="admin_name"
                item-value="admin_name"
                label="Select"
                @change="filterUpdate"
                return-object
              >
              </v-select>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-btn block @click="submit" color="red"> Filter </v-btn>
        <v-btn class="mt-4" block @click="reset" color="red"> Reset </v-btn>
      </v-navigation-drawer>
      <div class="text-center">
        <v-pagination
          v-model="pageData.current_page"
          :length="pageData.last_page"
          :next-icon="nextArrow"
          :prev-icon="prevArrow"
        ></v-pagination>
      </div>
    </section>
  </v-container>
</template>

<script>
import { mdiMenuDown } from '@mdi/js'
import { mdiArrowRight } from '@mdi/js'
import { mdiArrowLeft } from '@mdi/js'

export default {
  data() {
    return {
      drawer: false,
      filterMenu: {},
      filterParams: {},
      creators: {},
      pageData: {},
      dropdownIcon: mdiMenuDown,
      nextArrow: mdiArrowRight,
      prevArrow: mdiArrowLeft,
      breadcrumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'Influencers',
          disabled: false,
          to: '/influencers',
        },
      ],
      items: [
        {
          title: 'Language',
          menu: ['English', 'Hindi'],
        },
        {
          title: 'Follower',
          menu: ['More than 100', 'More than 250', 'More than 500'],
        },
        {
          title: 'Social',
          menu: ['Facebook', 'Instagram', 'Twitter'],
        },
        {
          title: 'Category',
          menu: ['Health and Fitness', 'Beauty and Cosmetics', 'Travel'],
        },
      ],
    }
  },
  async fetch() {
    await this.$axios
      .$get('creators', {
        params: {},
      })
      .then((res) => {
        this.creators = res.data
      })
      .catch((err) => {
        console.log(err)
      })

    await this.$axios
      .$get('filter')
      .then((ress) => {
        this.filterMenu = ress.data
      })
      .catch((err) => {
        console.log(err)
      })

    await this.$axios
      .$get('creators')
      .then((res) => {
        this.pageData = res.meta
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {
    async submit() {
      await this.$axios
        .$get('creator', {
          params: this.filterParams,
        })
        .then((res) => {
          this.$router.push({ query: this.filterParams })
          this.creators = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },

    filterUpdate(data) {
      this.filterParams[data.filter_code] = data.admin_name
      // this.$router.push({ query: this.filterParams })
    },

    reset() {
      this.filterParams = {}
      this.$router.push({ query: this.filterParams })
      this.$fetch()
    },
  },
}
</script>

