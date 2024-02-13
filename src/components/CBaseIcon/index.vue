<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="icon"
    role="presentation"
    fill="none"
    v-html="path"
  ></svg>
</template>

<script>
import icons from "./icons";
export default {
  name: "BaceIcon",
  props: {
    icon: {
      type: String,
      default: "menu",
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
  computed: {
    path() {
      return icons[this.icon];
    },
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
  },
};
</script>

<style></style>
