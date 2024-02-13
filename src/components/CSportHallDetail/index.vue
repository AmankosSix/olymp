<template>
  <div class="sport__hall__detail">
    <section class="sport__hall__detail--firstblog">
      <v-container>
        <div class="sport__hall__detail--wrap">
          <h2 class="news--title games-detail-title">
            {{ item.name }}
          </h2>
          <div class="sport__hall__detail--region">{{ item.region }}</div>
        </div>
      </v-container>
      <c-img class="news__screen--img" :src="item.avatar" :alt="item.name" />
    </section>
    <section>
      <v-container>
        <div
          class="sport__hall__detail--description"
          v-html="item.description"
        ></div>

        <!-- <div style="margin-top: 30" v-html="item.seo"></div> -->

        <div class="sport__hall__detail--tabs">
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(block, index) in item.accordion"
              :key="index"
            >
              <v-expansion-panel-header
                @click="toggleCollapse(index)"
                disable-icon-rotate
              >
                <template v-slot:actions>
                  <v-icon color="teal"> mdi-plus </v-icon>
                </template>
                <div class="sport__hall__detail--acc">
                  <div>{{ block.title }}</div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div
                  v-html="block.description"
                  class="sport__hall__detail--acc-content"
                ></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <v-carousel
          cycle
          :interval="5000"
          transition="fade-transition"
          v-if="item.photos.length"
        >
          <v-carousel-item v-for="(item, i) in item.photos" :key="i">
            <c-img :src="item.img" alt="image" />
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "SportHallDetail",
  props: {
    item: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      blocks: [],
      model: 0,
    };
  },
};
</script>

<style>
/* .v-expansion-panel-header__icon {
  display: none;
} */
.v-responsive__content img {
  width: 100%;
}
</style>
