<template>
  <section class="news federation-main" id="federation-info">
    <v-container>
      <h2 class="news--title">ДОПОЛНИТЕЛЬНО</h2>
      <v-tabs
        v-model="eitherTab"
        background-color="transparent"
        color="basil"
        grow
        class="fed-wrap"
      >
        <v-tab v-for="item in list" :key="item.title" class="either">
          {{ item.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="eitherTab">
        <div class="fed-info-wrapper">
          <v-tab-item
            v-for="item in list"
            :key="item.title"
            class="either-wrap"
          >
            <v-col cols="12" md="7">
              <div class="fed-info-text" v-html="item.description" />
            </v-col>
            <v-col cols="12" offset-md="1" md="3" class="either-img">
              <c-img :src="img" alt="sport" />
            </v-col>
          </v-tab-item>
        </div>
      </v-tabs-items>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "CNewsList",
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    img: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      eithers: ["ПРАВИЛА БОКСА", "БОКС В КАЗАХСТАНЕ", "ОЛИМПИЙСКИЕ ДИСЦИПЛИНЫ"],
      eitherTab: null,
      text1:
        "В 1946 году в Алма-Ате прошел первый чемпионат Республики Казахстан по боксу.",
      text2:
        "Федерация бокса республики создана в 1959 г. на базе республиканской секции бокса, которая была основана в 1941 году.",
      text3:
        "В 1992 году Казахстанская федерация бокса стала членом АИБА и вошла в состав Азиатской конфедерации бокса.",
      text4:
        "На чемпионатах СССР и СНГ до 1992 г. боксеры Казахстана завоевали 157 медалей (36 золотых, 44 серебряных, 77 бронзовых).",
    };
  },
};
</script>
<style lang="scss">
.fed-info-tab {
  margin-top: 60px;
  padding-bottom: 200px;
}
.fed-wrap {
  margin-top: 60px;
  & > div {
    font-size: 30px;
  }
}
.either {
  font-weight: 600;
  font-size: 30px;
  color: rgba(5, 0, 80, 0.5) !important;
}
.news .theme--light.v-tabs-items {
  background-color: #fff0;
}
.fed-info-wrapper {
  margin-top: 50px;
}
.fed-info-text {
  font-weight: 400;
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  color: #050050;
}
.either-wrap {
  display: flex;
}
.either-img {
  height: 100%;
}
.either-img img {
  width: 100%;
}
.fed-wrap .v-tabs-slider-wrapper {
  width: 0 !important;
}
.either.v-tab.v-tab--active {
  color: #050050 !important;
}
.news.federation-main::before {
  display: none;
}
</style>
