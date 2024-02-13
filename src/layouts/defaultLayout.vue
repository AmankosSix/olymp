<template>
  <div class="page">
    <div class="content">
      <c-header :list="list" />
      <router-view />
    </div>
    <c-footer />
  </div>
</template>

<script>
import CHeader from "@/components/CHeader";
import CFooter from "@/components/CFooter";
import { mapGetters } from "vuex";
export default {
  name: "defaultLayout",
  components: {
    CHeader,
    CFooter,
  },
  computed: {
    ...mapGetters({
      getHeaderLogo: "getHeaderLogo",
    }),
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    setLogo(src) {
      alert(src);
    },
  },
  async mounted() {
    const res = await this.api.mainPage.getMenu();
    this.list = res.data;
  },
};
</script>

<style lang="scss">
.page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.content {
  flex: 1;
}
</style>
