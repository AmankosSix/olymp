<template>
  <section class="games">
    <div class="games__block">
      <v-container>
        <h1
          class="games__block--title"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          Олимпийские игры
        </h1>
        <div class="games__block__list new__list">
          <router-link
            :to="{ name: 'games-detail', params: { id: item.alt } }"
            v-for="item in newList"
            :key="item.id"
            class="games__block__list--item"
            v-scroll-animate="{
              animation: 'animate__fadeInUp',
            }"
          >
            <div class="games__block__list--item__text">
              <c-img
                :src="item.avatar"
                class="games__block__list--item__text--img"
              />
              <div>
                <h2 class="games__block__list--item--title">
                  {{ item.name }}
                </h2>
                <p>05.10.2022 - 05.11.2022</p>
              </div>
            </div>
            <p class="games__block__list--item__type">{{ types[item.type] }}</p>
          </router-link>
        </div>
      </v-container>
    </div>
    <v-container>
      <div class="games__block__list">
        <router-link
          :to="{ name: 'games-detail', params: { id: item.alt } }"
          v-for="item in oldList"
          :key="item.id"
          class="games__block__list--item"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          <div class="games__block__list--item__text">
            <c-img
              :src="item.avatar"
              class="games__block__list--item__text--img"
            />
            <div>
              <h2 class="games__block__list--item--title">
                {{ item.name }}
              </h2>
              <p>05.10.2022 - 05.11.2022</p>
            </div>
          </div>
          <p class="games__block__list--item__type">{{ types[item.type] }}</p>
        </router-link>
      </div>
    </v-container>
  </section>
</template>

<script>
import { getDate } from "@/services/datesFromat";
export default {
  name: "CGames",
  props: {
    newList: {
      type: Array,
      default() {
        return [];
      },
    },
    oldList: {
      type: Array,
      default() {
        return [];
      },
    },
    types: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    dateRange({ started_at }) {
      return getDate(started_at);
    },
  },
};
</script>
