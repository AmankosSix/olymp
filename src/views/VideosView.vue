<template>
  <main>
    <c-videos-main class="video__active videos__blog" />
    <c-videos-list :videosList="videosList" @page="videoList" :meta="meta" />
  </main>
</template>
<script>
import CVideosMain from "@/components/CVideosMain";
import CVideosList from "@/components/CVideosList";
export default {
  name: "VideoView",
  components: {
    CVideosMain,
    CVideosList,
  },
  data() {
    return {
      points: {},
      videosList: [],
      meta: {},
      videosDeleteFirst: {},
    };
  },
  mounted() {
    const page = +this.$route.query.page || 1;
    this.videoList(page);
  },
  methods: {
    async videoList(page) {
      const res = await this.api.videos.getVideosPoints(
        page,
        10,
        "",
        this.$route.params.id
      );
      this.meta = res.data.pop();
      this.videosDeleteFirst = res.data.shift();
      this.videosList = res.data;
    },
  },
};
</script>
