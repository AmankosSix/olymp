<template>
  <v-dialog v-model="dialog" width="100%" @click:outside="$emit('close')">
    <div class="video__block" v-html="activeVideo.script"></div>
  </v-dialog>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    activeVideo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    open() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style lang="scss">
.video__block {
  padding-top: 30px;
  iframe {
    width: 100%;
    min-height: 70vh;
  }
}
</style>
