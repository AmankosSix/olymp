<template>
  <main>
    <c-videos-main class="videos__blog video__active" />
    <section class="news__screen videos__before">
      <v-container class="videos__detail">
        <div
          v-html="VideosDetailMain.script"
          class="videos__detail--youtube"
          id="scroll-id"
        ></div>
      </v-container>
    </section>
    <c-videos-list :videosList="videosList" @page="videoList" :meta="meta" />
  </main>
</template>
<script>
import CVideosList from "@/components/CVideosList";
import CVideosMain from "@/components/CVideosMain";
export default {
  name: "VideosDetailView",
  components: {
    CVideosList,
    CVideosMain,
  },
  data() {
    return {
      VideosDetailMain: {},
      videosList: [],
      meta: {},
    };
  },
  watch: {
    "$route.params.id": {
      handler: async function (paramsId) {
        const page = +this.$route.query.page || 1;
        const id = paramsId;
        const res = await this.api.videos.getVideosDetail(id);
        this.VideosDetailMain = res.data[0];
        this.videoList(page);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async videoList(page) {
      const videoList = await this.api.videos.getVideosPoints(
        page,
        10,
        "",
        this.$route.params.id
      );
      this.meta = videoList.data.pop();
      this.videosList = videoList.data;
    },
    scrollToElement() {
      const element = document.getElementById("scroll-id");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    this.scrollToElement();
  },
};
</script>
