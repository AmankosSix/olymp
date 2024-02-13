<template>
  <main>
    <section class="athletes">
      <v-container class="athletes__block">
        <h1
          class="athletes__block--title"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          Спортсмены
        </h1>
        <div class="athletes__block__list">
          <v-row id="scroll-block">
            <v-col cols="12">
              <v-field
                class="athletes__block__list--search"
                icon="mdi-magnify"
                @onEnter="onEnter"
                @icon-click="onEnter(search)"
                placeholder="Введите текст для поиска"
                v-model="search"
              />
            </v-col>
          </v-row>
          <v-row
            v-for="(item, i) in list"
            :key="i"
            class="athletes__block__list--item"
            v-scroll-animate="{
              animation: 'animate__fadeInUp',
            }"
          >
            <v-col cols="12" sm="4">
              <router-link
                :to="{ name: 'athletes-detail', params: { id: item.alt } }"
                class="d-flex align-center"
              >
                <c-img
                  class="athletes__block__list--item--img mb-4 mb-sm-0"
                  :src="checkImg(item)"
                  alt=""
                />
                <h2 class="athletes__block__list--item--title ml-0 ml-sm-5">
                  {{ item.name }}
                </h2>
              </router-link>
            </v-col>
            <v-col col="12" sm="3" class="d-flex align-center">
              <p class="athletes__block__list--item--type mb-2">
                {{ item.sport }}
              </p>
            </v-col>
            <v-col col="12" sm="3" class="d-flex align-center"
              ><p class="athletes__block__list--item--count">
                {{ item.games || 0 }} игры
              </p></v-col
            >
            <v-col col="12" sm="2" class="d-flex align-center"
              ><div class="athletes__block__list--item--medals">
                <div class="athletes__block__list--item--medals--gold">
                  {{ item.gold || 0 }}
                </div>
                <div class="athletes__block__list--item--medals--silver">
                  {{ item.silver || 0 }}
                </div>
                <div class="athletes__block__list--item--medals--copper">
                  {{ item.bronze || 0 }}
                </div>
              </div></v-col
            >
          </v-row>
          <c-pagination v-if="meta.total > 1" :meta="meta" v-model="page" />
        </div>
      </v-container>
    </section>
  </main>
</template>

<script>
import CPagination from "@/components/Customs/CPagination";
export default {
  name: "AthletesView",
  components: {
    CPagination,
  },
  data() {
    return {
      list: [],
      page: 1,
      meta: {},
      search: "",
    };
  },
  async mounted() {
    this.getList();
  },
  watch: {
    page(val) {
      this.getList(val);
    },
  },
  methods: {
    async onEnter(search) {
      this.getList(1, search);
    },
    checkImg(item) {
      return item.avatar ? item.avatar : `/images/champions/1/unconted_sm.jpg`;
    },
    async getList(page, search = "") {
      const res = await this.api.athletes.getAthletesList({ page, search });
      this.meta = res.data.pop();
      this.list = res.data;
    },
  },
};
</script>

<style lang=""></style>
