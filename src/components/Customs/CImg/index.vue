<template>
  <div
    class="image-wrapper"
    :class="{ placeholder: placeholder, placeholder__over: loadOver }"
    v-if="adaptive"
  >
    <div class="image-wrapper__bg" :style="stylesBlock" />
    <img
      class="responsive-image"
      :ref="'img'"
      :src="this.baseUrl ? imageBaseUrl + src : src"
      alt="description"
      @error="handleImageError"
      @load="loadImg"
    />
  </div>
  <img
    v-else
    :src="this.baseUrl ? imageBaseUrl + src : src"
    :ref="'img'"
    @error="handleImageError"
    @load="loadImg"
  />
</template>

<script>
export default {
  name: "CImg",
  props: {
    src: {
      type: String,
      default: "",
    },
    adaptive: {
      type: Boolean,
      default: false,
    },
    defaultType: {
      type: String,
      default: "storage",
    },
    baseUrl: {
      type: Boolean,
      default: true,
    },
    // Если он есть, то заглушки не будет
    placeholder: {
      type: Boolean,
      default: false,
    },
    stylesBlock: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      loadOver: false,
    };
  },
  methods: {
    handleImageError() {
      if (!this.placeholder)
        this.$refs.img.src = `${this.imageBaseUrl}/${this.defaultType}/62/default.jpg`;
    },
    loadImg() {
      this.loadOver = true;
      // this.$refs.img.src = "http://10.242.111.245:8000" + this.src;
    },
  },
  computed: {
    imageBaseUrl() {
      return process.env.VUE_APP_IMAGE_BASE_URL;
    },
  },
};
</script>

<style lang="scss">
.image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 9/16 = 0.5625 или 56.25% */
  &::before {
    transition: 0.4s;
  }
  &__bg {
    transition: 0.4s;
    width: 100%;
    height: 100vh;
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
.placeholder__over::before {
  opacity: 0;
}
.placeholder {
  position: relative;
  &::before {
    background: #272f5a;
    z-index: 1;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
  }
}
.responsive-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* чтобы изображение подстраивалось по размеру и не растягивалось */
}
</style>
