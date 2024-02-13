<template>
  <section class="news__screen videos__before">
    <v-container class="videos__detail">
      <div
        v-html="VideosDetailMain.script"
        class="videos__detail--youtube"
      ></div>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "VideosDetailMain",
  props: {
    VideosDetailMain: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
