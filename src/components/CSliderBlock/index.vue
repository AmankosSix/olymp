<template>
  <div class="slider" :style="{ backgroundImage: `url(${currentImage})` }">
    <div class="slider__block" :style="stylesBlock" />
    <transition name="fade" mode="out-in">
      <img
        :key="currentImage"
        :src="getImg(currentImage)"
        class="slider-image"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "CSliderBlock",
  props: {
    stylesBlock: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      images: [
        "main_slide1.jpg",
        "main_slide2.jpg",
        "main_slide3.jpg",
        "main_slide4.jpg",
        // Добавьте свои фотографии
      ],
      currentIndex: 0,
      interval: null,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    getImg(img) {
      return require("../../assets/img/" + img);
    },
    startSlider() {
      this.interval = setInterval(this.nextSlide, 30000);
    },
    stopSlider() {
      clearInterval(this.interval);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
  mounted() {
    this.startSlider();
  },
  beforeDestroy() {
    this.stopSlider();
  },
};
</script>

<style scoped lang="scss">
.slider {
  background: $blue-main;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  &__block {
    transition: 0.4s;
    width: 100%;
    height: 100vh;
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
