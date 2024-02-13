<template>
  <section class="search">
    <div class="search__block">
      <v-container>
        <h1
          class="search__block--title"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          Результаты поиска
        </h1>
      </v-container>
    </div>
    <v-container>
      <div class="search__block__list">
        <v-field
          class="athletes__block__list--search"
          icon="mdi-magnify"
          @onEnter="onEnter"
          @icon-click="onEnter(search)"
          placeholder="Введите текст для поиска"
          v-model="search"
        />
        <h2 class="search__block__list--title mb-10">Новости</h2>
        <div v-if="news.length">
          <router-link
            :to="{ name: 'news-detail', params: { id: item.alt || item.id } }"
            v-for="(item, i) in news"
            :key="item.id"
            class="search__block__list--item"
            v-scroll-animate="{
              animation: i > 2 ? 'animate__fadeInUp' : 'none',
            }"
          >
            <div class="search__block__list--item__text">
              <div>
                <h2 class="search__block__list--item--title">
                  {{ item.name }}
                </h2>
                <p class="search__block__list--item--description">
                  {{ cleanHTML(item.description) }}
                </p>
                <p class="search__block__list--item__text--date">
                  {{ dateRange(item.published_at) }} | {{ item.views }}
                  <v-icon>mdi-eye</v-icon>
                </p>
              </div>
            </div>
          </router-link>
        </div>
        <p v-else>Совпадений нет</p>

        <h2 class="search__block__list--title mb-10" v-if="champions.length">
          Спортсмены
        </h2>
        <div v-if="champions.length">
          <router-link
            :to="{
              name: 'athletes-detail',
              params: { id: item.alt || item.id },
            }"
            v-for="(item, i) in champions"
            :key="item.id"
            class="search__block__list--item"
            v-scroll-animate="{
              animation: i > 2 ? 'animate__fadeInUp' : 'none',
            }"
          >
            <div class="search__block__list--item__text">
              <div>
                <h2 class="search__block__list--item--title">
                  {{ item.name }}
                </h2>
                <p class="search__block__list--item--description">
                  {{ cleanHTML(item.description) }}
                </p>
                <p
                  v-if="item.birthday || item.discipline"
                  class="search__block__list--item__text--date"
                >
                  {{ item.birthday }} | {{ item.discipline }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import { getDate } from "@/services/datesFromat";
export default {
  name: "CGames",
  props: {
    news: {
      type: Array,
      default() {
        return [];
      },
    },
    newsMeta: {
      type: Object,
      default() {
        return {};
      },
    },
    champions: {
      type: Array,
      default() {
        return [];
      },
    },
    championsMeta: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      search: this.$route.query.name || "",
    };
  },
  methods: {
    dateRange(published_at) {
      return getDate(published_at);
    },
    cleanHTML(input) {
      let doc = new DOMParser().parseFromString(input, "text/html");
      doc.querySelectorAll("img").forEach((img) => img.remove());
      return doc.body.textContent || "";
    },
    onEnter(search) {
      this.$emit("searchEvent", search);
    },
  },
};
</script>
