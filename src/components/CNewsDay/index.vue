<template>
  <section class="pb-15 pt-10 news_section white-text">
    <v-container>
      <h2 class="news__day_title mb-10 title-line">
        {{ news.header || "НОВОСТЬ ДНЯ" }}
      </h2>
      <v-row>
        <v-col
          cols="12"
          md="7"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          <div class="news_day d-flex flex-column justify-space-between">
            <div>
              <p v-if="news.title" class="news_day--text">
                {{ news.title }}
              </p>
              <p
                v-if="news.description"
                class="news_day--sub mb-15"
                v-html="news.description"
              />
            </div>

            <router-link
              class="news_day--link"
              :to="{ name: 'news-detail', params: { id: news.article_alt } }"
              ><base-icon width="31" height="24" icon="arrowLeft"
            /></router-link>
          </div>
        </v-col>
        <v-col cols="12" md="5" class="news_day">
          <c-img
            class="news_day--img"
            :src="news.img"
            v-scroll-animate="{
              animation: 'animate__fadeInUp',
            }"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "CNewsDay",
  props: {
    news: {
      type: Array,
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
    display: -webkit-box;
    -webkit-line-clamp: 3; // количество строк
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &--img {
    width: 100%;
  }
  &--link {
    path {
      fill: #ffffff !important;
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
