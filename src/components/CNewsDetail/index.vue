<template>
  <section class="news__detail__info">
    <v-container>
      <div class="news__detail__info--text1" v-html="item.annotation" />
      <div class="news__detail__info--text2" v-html="item.description" />
    </v-container>
  </section>
</template>

<script>
export default {
  name: "CNewsDetail",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.news__detail__info {
  margin-top: 50px;
  &--text1 {
    font-size: 27px;
    font-weight: 400;
    color: #050050;
  }
  &--text2 {
    margin-top: 50px;
    font-size: 27px;
    font-weight: 300;
    color: #050050;
  }
}
</style>
