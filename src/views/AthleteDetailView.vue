<template>
  <main :key="$route.fullPath">
    <section class="athlete">
      <c-img class="athlete--img" :src="checkImg(item)" alt="" />
      <v-container style="position: relative">
        <div class="athlete_wrap">
          <h1>{{ item.name }}</h1>
        </div>
      </v-container>
      <div class="athlete--block d-flex">
        <div class="athlete--left-side">
          <div class="athlete--title">ОЛИМПИЙСКИЕ МЕДАЛИ</div>
          <div class="athlete--blog">
            <div class="athlete--medal gold">{{ item.gold || 0 }}</div>
            <div class="athlete--medal silver">{{ item.silver || 0 }}</div>
            <div class="athlete--medal bronze">{{ item.bronze || 0 }}</div>
          </div>
        </div>
        <div class="athlete--right-side">
          <div class="athlete--title">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</div>
          <div class="athlete--fed">
            <div class="athlete--subtitle">Федерации: {{ item.sport }}</div>
            <div class="athlete--subtitle" v-if="item.disciplin">
              Дисциплина: {{ item.disciplin }}
            </div>
            <!-- <div v-if="item.parent_id" class="athlete--subtitle">
              parent_id: {{ item.parent_id }}
            </div> -->
          </div>
          <div class="athlete--border-bottom"></div>
        </div>
      </div>
    </section>
    <c-federation-members :list="list" @addList="addList" />
    <c-about-athlete :item="item" />
    <c-news-list
      :items="newsItems"
      :meta="newsMeta"
      @page="newsList"
      @news-tab="newsList"
      federation
      short
    />
  </main>
</template>

<script>
import { getId } from "@/services/strings";
import CFederationMembers from "@/components/CFederationMembers";
import CAboutAthlete from "@/components/CAboutAthlete";
import CNewsList from "@/components/CNewsList";
export default {
  name: "AthleteDetailView",
  components: {
    CFederationMembers,
    CAboutAthlete,
    CNewsList,
  },
  data() {
    return {
      item: {},
      newsMeta: {},
      newsItems: [],
      list: [],
    };
  },
  watch: {
    "$route.params.id": {
      handler: async function (paramsId) {
        this.list = [];
        this.addList();
        this.getDetail(paramsId);
      },
      deep: true,
      immediate: true,
    },
  },
  async mounted() {
    await this.newsList({ page: 1 });
  },
  methods: {
    checkImg(item) {
      return item.avatar
        ? item.avatar
        : `/images/champions/${item.id}/original_unconted_sm.jpg`;
    },
    async newsList({ page = 1, type = null }) {
      const res = await this.api.news.getNews({ page, type, count: 4 });
      this.newsMeta = res.data.pop();
      this.newsItems = res.data;
    },
    async getDetail(paramsId) {
      const id = getId(paramsId);
      const res = await this.api.athletes.getAthletesDetail(id);
      this.item = res.data;
    },
    async addList(page = 1) {
      const list = await this.api.athletes.getAthletesList({ page, count: 4 });
      list.data.pop();
      this.list.push(...list.data);
    },
  },
};
</script>
