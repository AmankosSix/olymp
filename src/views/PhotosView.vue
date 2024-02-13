<template>
  <main>
    <c-videos-main class="videos__blog photo__active" />
    <c-photos-list :photosList="photosList" :meta="meta" @page="photoList" />
  </main>
</template>
<script>
import CPhotosList from "@/components/CPhotosList";
import CVideosMain from "@/components/CVideosMain";
export default {
  name: "PhotosView",
  components: {
    CPhotosList,
    CVideosMain,
  },
  data() {
    return {
      photosList: [],
      meta: {},
    };
  },
  async mounted() {
    const page = +this.$route.query.page || 1;
    this.photoList(page);
  },
  methods: {
    async photoList(page) {
      const res = await this.api.videos.getPhotosPoints(
        page,
        10,
        "",
        this.$route.params.id
      );
      this.meta = res.data.pop();
      this.photosList = res.data;
    },
  },
};
</script>
