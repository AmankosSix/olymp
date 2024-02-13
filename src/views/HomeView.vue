<template>
  <main class="main__block">
    <c-slider-block :styles-block="scrollStyles" />
    <!-- <c-img
      class="main__block--img-dark"
      placeholder
      adaptive
      dark-scroll
      :styles-block="scrollStyles"
      :src="settings?.bg"
      alt=""
    /> -->
    <c-main-screen :slider="slider" />
    <c-news-day :news="newsDay" />
    <c-olimp-games
      :games="games"
      :competitions="competitions"
      :videosList="videosList"
      :photoList="photoList"
    >
      <c-news-list
        class="news__main bg-none"
        :items="newsItems"
        :meta="newsMeta"
        @page="newsList"
        @news-tab="newsList"
        short
    /></c-olimp-games>
  </main>
</template>

<script>
import CMainScreen from "@/components/CMainScreen";
import CNewsDay from "@/components/CNewsDay";
import COlimpGames from "@/components/COlimpGames";
import CNewsList from "@/components/CNewsList";
import CSliderBlock from "@/components/CSliderBlock";
import { getArrFromObj } from "@/services/jsonConfert";
import { mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {
    CMainScreen,
    CNewsDay,
    COlimpGames,
    CNewsList,
    CSliderBlock,
  },
  data() {
    return {
      slider: [],
      newsDay: [],
      games: [],
      competitions: [],
      newsItems: [],
      newsMeta: {},
      settings: {},
      videosDeleteLast: {},
      videosList: [],
      photoList: [],
      photoDeleteLast: {},
      scrolled: false,
    };
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    const res = await this.api.mainPage.getMainPageInfo();
    this.settings = res.data.settings;

    this.slider = getArrFromObj(
      res.data.settings.slider,
      res.data.current_news
    );
    this.newsDay = res.data.settings.day_news;
    this.games = getArrFromObj(
      res.data.settings.games_cards,
      res.data.current_games
    );
    this.competitions = getArrFromObj(
      res.data.settings.competitions,
      res.data.current_competitions
    );
    console.log(this.competitions);
    await this.videoList();
    await this.getPhotosPoints();
    await this.newsList({ page: 1 });
  },
  computed: {
    scrollStyles() {
      if (this.scrolled) {
        return {
          filter: "brightness(15%)",
          background: "rgb(0 139 207 / 68%)",
        };
      }
      return {};
    },
  },
  methods: {
    ...mapActions({
      setHeaderlogo: "setHeaderlogo",
    }),
    handleScroll() {
      requestAnimationFrame(() => {
        this.scrolled = window.scrollY >= 100;
      });
    },
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
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
};
</script>

<style lang="scss">
.bg__blue {
  background: #008bcf !important;
}
.main__block {
  &--img-dark {
    backface-visibility: hidden;
    transition: 0.4s;
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
  .news {
    &__main {
      padding-top: 100px;
      .news--title {
        color: #ffffff;
      }
    }
  }
}
</style>
