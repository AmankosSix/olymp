<template>
  <section>
    <div class="inf__olymp--wrapper">
      <v-container>
        <div class="inf__olymp--title">{{ item.name }}</div>
      </v-container>
    </div>
    <v-container>
      <div
        class="inf__olymp--wrap"
        v-if="item.description"
        v-html="item.description"
      ></div>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "InformationAboutOlympicView",
  data() {
    return {
      item: [],
    };
  },
  mounted() {
    this.getInformationOlympic();
  },
  methods: {
    async getInformationOlympic() {
      const res = await this.api.about.getAboutInfo(this.$route.params.alt);
      this.item = res.data[0];
    },
  },
};
</script>
