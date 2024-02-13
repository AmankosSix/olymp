<template>
  <main>
    <section class="news__screen new__screen--no_before">
      <v-container>
        <div class="photo__main">
          <div class="photo__main--title">{{ photosList[0].name }}</div>
        </div>
      </v-container>
    </section>
    <section class="news__screen video__screen__detail">
      <v-container>
        <v-carousel cycle transition="fade-transition" hide-delimiters>
          <v-carousel-item v-for="item in photoListDet" :key="item.id">
            <c-img :src="item.img" alt="image" />
          </v-carousel-item>
        </v-carousel>
        <div class="photo-undertitle" v-html="photosList[0].description"></div>
      </v-container>
    </section>
  </main>
</template>
<script>
export default {
  name: "PhotosDetailView",
  components: {},
  data() {
    return {
      photoListDet: [],
      photosList: [],
      meta: {},
    };
  },
  mounted() {
    this.photoList();
    this.photoListDetail();
  },
  methods: {
    async photoListDetail() {
      const resp = await this.api.videos.getPhotosDetail(this.$route.params.id);

      this.meta = resp.data.pop();
      this.photoListDet = resp.data;
    },
    async photoList() {
      const res = await this.api.videos.getPhotosPoints();
      const categoryIdToFilter = this.$route.params.id;
      this.photosList = res.data.filter(
        (item) => item.id == categoryIdToFilter
      );
    },
    scrollToElement() {
      const element = document.getElementById("scroll-id");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
.v-responsive__content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
