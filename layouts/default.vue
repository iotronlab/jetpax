<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        label="Dark Mode"
        persistent-hint
      ></v-switch>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat fixed app color="transparent">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/"> <v-img src="logo.png" width="210" /></nuxt-link>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>

    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],

      title: 'Launchpad',
    }
  },
}
</script>
