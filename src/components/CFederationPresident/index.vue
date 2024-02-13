<template>
  <section class="pb-15 pt-10 white news_section">
    <v-container>
      <!-- <h2 class="news__day_title mb-10">НОВОСТЬ ДНЯ</h2>
      <v-row>
        <v-col cols="12" md="7">
          <div class="news_day d-flex flex-column justify-space-between">
            <div>
              <p class="news_day--text">
                {{ news.name }}
              </p>
              <p class="news_day--sub mb-15">
                {{ news.annotation }}
              </p>
            </div>

            <router-link
              class="news_day--link"
              :to="{ name: 'news-detail', params: { id: news.id } }"
              ><base-icon width="31" height="24" icon="arrowLeft"
            /></router-link>
          </div>
        </v-col>
        <v-col cols="12" md="5" class="news_day">
          <img
            class="news_day--img"
            :src="'http://10.242.111.245:8000' + news.avatar"
            alt=""
          />
        </v-col>
      </v-row> -->

      <div v-html="item.description"></div>
      <div v-html="item.world_description"></div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "CFederationPresident",
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
.news__day_title {
  font-size: 40px;
  font-weight: 600;
}
.news_section {
  position: relative;
}
.news_day {
  height: 100%;
  &--text {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 28px;
  }
  &--sub {
    font-size: 20px;
    font-weight: 400;
  }
  &--img {
    width: 100%;
  }
  &--link {
    path {
      fill: #050050;
    }
  }
}
.fed_p {
  font-size: 20px;
  font-weight: 400;
}
.reverse {
  flex-direction: row-reverse;
  margin-top: 100px;
}
.reverse .news_day {
  text-align: end;
}
.reverse .news_day--link {
  transform: rotate(180deg);
  text-align: left;
}
</style>
