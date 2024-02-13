<template>
  <main class="main__block">
    <c-img
      class="main__block--img"
      placeholder
      adaptive
      :src="settings?.bg"
      alt="sport"
    />
    <c-main-screen :slider="slider" :federation="slider" />
    <c-news-day :news="newsDay" />
    <!-- <c-news-day :news="newsDay[0]" />
    <c-news-day reverse /> -->
    <c-federation-president :item="federation" />
    <c-news-list
      class="news__main"
      :items="newsItems"
      :meta="newsMeta"
      @page="newsList"
      @news-tab="newsList"
      federation
      short
    />

    <c-federation-info :list="list" :img="settings?.avatar" />
    <c-olimp-games
      reverse
      title="МЕЖДУНАРОДНАЯ АРЕНА"
      :games="games"
      :competitions="competitions"
      :videosList="videosList"
      :photoList="photoList"
    />
  </main>
</template>
<script>
import CMainScreen from "@/components/CMainScreen";
import CNewsDay from "@/components/CNewsDay";
import CNewsList from "@/components/CNewsList";
import CFederationPresident from "@/components/CFederationPresident";
import COlimpGames from "@/components/COlimpGames";
import CFederationInfo from "@/components/CFederationInfo";
import { getArrFromObj } from "@/services/jsonConfert";
import { mapActions } from "vuex";

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export default {
  name: "InfoFedTemporary",
  components: {
    CMainScreen,
    CNewsList,
    CNewsDay,
    CFederationPresident,
    COlimpGames,
    CFederationInfo,
  },
  data() {
    return {
      avatar: null,
      slider: [],
      newsDay: [],
      games: [],
      competitions: [],
      newsItems: [],
      newsMeta: {},
      federation: {},
      list: [],
      settings: {},
      videosDeleteLast: {},
      videosList: [],
      photoList: [],
      photoDeleteLast: {},
    };
  },
  async mounted() {
    const federation = await this.api.federation.getFederationDetail();
    this.federation = federation.data[0];
    this.list = IsJsonString(this.federation.accordion_ru)
      ? JSON.parse(this.federation.accordion_ru)
      : [];
    const res = await this.api.mainPage.getMainPageInfo();
    this.settings = res.data.settings;
    // this.setHeaderlogo(this.settings.avatar);
    this.slider = res.data.settings;
    this.newsDay = res.data.settings.day_news;
    this.games = getArrFromObj(
      res.data.settings.games_cards,
      res.data.current_games
    );
    this.competitions = getArrFromObj(
      res.data.settings.competitions,
      res.data.current_competitions
    );
    await this.videoList();
    await this.getPhotosPoints();
    await this.newsList({ page: 1 });
  },
  methods: {
    ...mapActions({
      setHeaderlogo: "setHeaderlogo",
    }),
    async newsList({ page = 1, type = null }) {
      const res = await this.api.news.getNews({ page, type, count: 4 });
      this.newsMeta = res.data.pop();
      this.newsItems = res.data;
    },
    async videoList() {
      const videoList = await this.api.videos.getVideosPoints(
        1,
        3,
        "",
        this.$route.params.id
      );
      this.videosDeleteLast = videoList.data.pop();
      this.videosList = videoList.data;
    },
    async getPhotosPoints() {
      const res = await this.api.videos.getPhotosPoints(
        1,
        3,
        "",
        this.$route.params.id
      );
      this.photoDeleteLast = res.data.pop();
      this.photoList = res.data;
    },
  },
};
</script>

<style lang="scss">
.main__block {
  &--img {
    filter: brightness(50%);
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: fixed !important;
    top: 0;
    bottom: 0;
  }
  & > section {
    position: relative;
  }
}
</style>
