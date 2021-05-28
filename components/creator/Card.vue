<template>
<v-container>{{creator}}Hi</v-container>
</template>
<script>
export default {
  props: {
    creator: {
      type: Object,
      required: true,
    }
  }
}
</script>
