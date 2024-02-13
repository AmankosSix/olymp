<template>
  <section class="game__detail">
    <div class="game__detail--bg">
      <v-container class="game__detail__main">
        <div class="game__detail--blog">
          <div>
            <p class="game__detail__main--type">{{ types[item.type] }}</p>
            <h1 class="game__detail__main--title">{{ item.name }}</h1>
            <!-- <p class="game__detail__main--date">
              с 25 сентрября 2023 по 25 октября 2023
            </p> -->
          </div>
          <div class="game__detail--blog--card" v-if="item.avatar">
            <c-img :src="item.avatar" alt="" defaultType="images/sections" />
          </div>
        </div>
      </v-container>
    </div>

    <v-container
      v-if="item.description || item.medal_results?.length || item.annotation"
    >
      <div class="game__detail__content">
        <div v-if="item.medal_results?.length">
          <h2>МЕДАЛЬНЫЙ ЗАЧЕТ</h2>
          <v-simple-table dense class="game__detail__medal-table">
            <thead>
              <tr>
                <th class="game__detail__medal-thead medal__number">№</th>
                <th class="game__detail__medal-thead ml-auto">Страна</th>
                <th class="game__detail__medal-thead medal__img">
                  <img src="@/assets/img/goldMedal.svg" alt="" />
                </th>
                <th class="game__detail__medal-thead medal__img">
                  <img src="@/assets/img/silverMedal.svg" alt="" />
                </th>
                <th class="game__detail__medal-thead medal__img">
                  <img src="@/assets/img/bronzeMedal.svg" alt="" />
                </th>
                <th class="game__detail__medal-thead medal__img">
                  <img
                    class="medal--img"
                    src="@/assets/img/totalMedal.svg"
                    alt=""
                  />
                </th>
              </tr>
            </thead>
            <tbody class="game__detail__medal--tbody">
              <tr
                v-for="(medalData, medalId) in mergedMedalResults"
                :key="medalId"
                :class="{
                  'game__detail__medal--kazakhstan':
                    medalData.country === 'Казахстан',
                }"
              >
                <td class="game__detail__medal-tbody">
                  {{ medalData.title }}
                </td>
                <td class="game__detail__medal-tbody">
                  <div class="game__detail__medal--flex">
                    <c-img
                      class="game__detail__medal--flag"
                      :src="medalData.flag"
                      alt="flag"
                      defaultType="images/sections"
                    />
                    {{ medalData.country }}
                  </div>
                </td>
                <td class="game__detail__medal-tbody">
                  {{ medalData.gold }}
                </td>
                <td class="game__detail__medal-tbody">
                  {{ medalData.silver }}
                </td>
                <td class="game__detail__medal-tbody">
                  {{ medalData.bronze }}
                </td>
                <td class="game__detail__medal-tbody">
                  {{ medalData.total }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
        <div
          v-if="item.annotation"
          v-html="item.annotation"
          class="game__detail__content--annotation"
        />

        <div v-html="item.description" v-if="item.description" />
        <section
          class="game__detail__content--accordion"
          v-for="el in item.accordion"
          :key="el.title"
        >
          <h2>{{ el.title }}</h2>
          <div v-html="el.description"></div>
        </section>
        <!-- <div v-html="" /> -->
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "CGamesDetail",
  props: {
    item: {
      type: Object,
      default() {
        return {
          medal_results: [],
        };
      },
    },
    countryName: {
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
  computed: {
    mergedMedalResults() {
      return this.item.medal_results.map((medalData) => {
        const matchingCountry = this.countryName.find(
          (country) => country.id === parseInt(medalData.country)
        );
        if (matchingCountry) {
          return {
            ...medalData,
            country: matchingCountry.name,
            flag: matchingCountry.flag,
            total:
              parseInt(medalData.gold) +
              parseInt(medalData.silver) +
              parseInt(medalData.bronze),
          };
        }
        return medalData;
      });
    },
  },
};
</script>
