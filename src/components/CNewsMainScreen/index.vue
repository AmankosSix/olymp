<template>
  <section v-if="type === 'list'" class="news__screen">
    <v-container>
      <div class="news__screen__block">
        <span>Таеквондо</span>
        <h1>{{ item.name }}</h1>
        <p class="news__screen__block--subtitle">
          ФИНАЛА ЧЕМПИОНАТА МИРА ПО ТАЕКВОНДО
        </p>
        <p class="news__screen__block--date">
          {{ getDateNews(item.published_at) }}
        </p>
        <router-link
          :to="{ name: 'news-detail', params: { id: item.alt || item.id } }"
          >Подробнее</router-link
        >
      </div>
    </v-container>
    <c-img class="news__screen--img" :src="item.avatar" alt="" />
  </section>
  <section v-else class="news__screen news_detail">
    <v-container>
      <div class="news__screen__block">
        <div class="d-flex align-center">
          <span>Таеквондо</span>
          <p class="news__screen__block--date ml-7">
            {{ getDateNews(item.published_at) }}
          </p>
        </div>
        <h1>{{ item.name }}</h1>
        <c-social-links :title="item.name" :url="url" />
      </div>
    </v-container>
    <c-img class="news_detail--bg" :src="item.avatar" alt="" />
  </section>
</template>

<script>
import { getDate } from "@/services/datesFromat";
import CSocialLinks from "@/components/CSocialLinks";
export default {
  name: "CNewsMainScreen",
  components: { CSocialLinks },
  props: {
    type: {
      type: String,
      default: "list",
    },
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getDateNews(dd) {
      return getDate(dd);
    },
  },
  computed: {
    url() {
      return window.location.href;
    },
  },
};
</script>
