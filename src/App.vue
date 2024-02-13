<template>
  <v-app>
    <component :is="layout"><router-view /></component>
  </v-app>
</template>

<script>
import defaultLayout from "@/layouts/defaultLayout.vue";
export default {
  name: "App",
  components: {
    defaultLayout,
  },
  computed: {
    layout() {
      return this.$route.meta?.layout || "defaultLayout";
    },
  },
};
</script>
