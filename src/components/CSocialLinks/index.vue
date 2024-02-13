<template>
  <div class="social">
    <div class="social__list">
      <v-icon v-for="item in links" :key="item.icon" @click="share(item.tag)">{{
        item.icon
      }}</v-icon>

      <base-icon
        @click.native="share('vk')"
        width="24"
        height="24"
        icon="vk"
      ></base-icon>
      <base-icon
        @click.native="share('tg')"
        width="50"
        height="50"
        icon="tg"
      ></base-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSocialLinks",
  props: ["url", "title"],
  data() {
    return {
      links: [
        {
          icon: "mdi-whatsapp",
          tag: "wa",
        },
        {
          icon: "mdi-twitter",
          tag: "tw",
        },
        {
          icon: "mdi-odnoklassniki",
          tag: "ok",
        },
      ],
    };
  },
  methods: {
    share(platform) {
      let shareUrl = "";

      switch (platform) {
        case "ok":
          shareUrl = `https://connect.ok.ru/offer?url=${encodeURIComponent(
            this.url
          )}&title=${encodeURIComponent(this.title)}`;
          break;
        case "vk":
          shareUrl = `https://vk.com/share.php?url=${encodeURIComponent(
            this.url
          )}&title=${encodeURIComponent(this.title)}`;
          break;
        case "tg":
          shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
            this.url
          )}&text=${encodeURIComponent(this.title)}`;
          break;
        case "wa":
          shareUrl = `https://wa.me/?text=${encodeURIComponent(
            this.title + " " + this.url
          )}`;
          break;
        case "tw":
          shareUrl = `https://twitter.com/share?url=${encodeURIComponent(
            this.url
          )}&text=${encodeURIComponent(this.title)}`;
          break;
      }

      window.open(shareUrl, "_blank");
    },
  },
};
</script>

<style lang="scss">
.social {
  margin-top: 40px;
  &__list {
    display: flex;
    gap: 15px;
    align-items: center;
    button {
      color: #ffffff !important;
      font-size: 32px !important;
      cursor: pointer;
    }
    svg {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }
}
</style>
