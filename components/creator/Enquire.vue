<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2"> Enquire About </v-card-title>
    <v-divider class="my-2"></v-divider>
    <v-text-field
      v-model="name"
      label="Name"
      class="pa-2 ma-2"
      filled
      shaped
    ></v-text-field>
    <v-text-field
      v-model="contact"
      label="Contact"
      class="pa-2 ma-2"
      filled
      shaped
    ></v-text-field>
    <v-text-field
      v-model="businessName"
      label="Business Name"
      class="pa-2 ma-2"
      filled
      shaped
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="Email"
      class="pa-2 ma-2"
      filled
      shaped
    ></v-text-field>

    <v-select
      :items="enquire"
      v-model="serviceSelect"
      item-text="name"
      item-value="name"
      label="Services"
      dense
      :append-icon="dropdownIcon"
      class="pa-2 ma-2"
      filled
      deletable-chips="true"
      :clear-icon="removeIcon"
      clearable
      shaped
      chips
      multiple
    >
      <template v-slot:selection="{ item }">
        <v-chip close :close-icon="removeIcon" @click:close="remove(item)">
          {{ item.name }}
        </v-chip>
      </template>
    </v-select>
    <v-textarea
      v-model="description"
      label="Description"
      class="pa-2 ma-2"
      filled
      shaped
    ></v-textarea>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="dialog = false"> send </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiMenuDown } from '@mdi/js'
import { mdiClose } from '@mdi/js'

export default {
  data() {
    return {
      serviceSelect: [],
      dropdownIcon: mdiMenuDown,
      removeIcon: mdiClose,
    }
  },
  methods: {
    remove(item) {
      this.serviceSelect.splice(this.serviceSelect.indexOf(item))
      this.serviceSelect = [...this.serviceSelect]
    },
  },
  props: {
    enquire: {
      type: Array,
      required: true,
    },
  },
}
</script>
