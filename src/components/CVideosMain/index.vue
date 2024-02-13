<template>
  <section class="news__screen video__screen">
    <v-container class="video__cont">
      <div class="video_width">
        <div
          class="media"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          <router-link
            :to="{ name: 'videos' }"
            class="media--photo media--route"
            >ВИДЕО</router-link
          >
          <span class="media--preset">/</span>
          <router-link
            :to="{ name: 'photos' }"
            class="media--video media--route"
            >ФОТО</router-link
          >
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "CPhotosList",
};
</script>
