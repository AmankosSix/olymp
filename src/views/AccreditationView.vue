<template>
  <main>
    <c-accreditation-filter
      :listFed="listFed"
      :regionList="regionList"
      :lastMeta="lastMeta"
      @chooseSelect="changePage"
      @clear-select="changePage"
    />
    <c-sport-hall
      :listSportHall="listSportHall"
      :lastMeta="lastMeta"
      @page="changePage"
    />
  </main>
</template>

<script>
import cSportHall from "@/components/CSportHall";
import CAccreditationFilter from "@/components/CAccreditationFilter";
export default {
  name: "AccreditationView",
  components: {
    cSportHall,
    CAccreditationFilter,
  },
  data() {
    return {
      listSportHall: [],
      lastMeta: {},
      federationList: 1,
      listFed: [],
      regionList: [],
    };
  },
  mounted() {
    const page = this.$route.query.page || 1;
    this.changePage({ page });
    this.getFederations();
    this.getRegions();
  },
  methods: {
    changePage(page) {
      this.getAccreditation({ ...page });
    },
    async getAccreditation(fill = {}) {
      const res = await this.api.accreditation.getAccreditationList({
        count: 16,
        ...fill,
      });
      this.lastMeta = res.data.pop();
      this.listSportHall = res.data;
    },
    async getFederations() {
      const res = await this.api.federation.getFederationsList(
        this.federationList
      );
      this.listFed = res.data[0];
    },
    async getRegions() {
      const res = await this.api.federation.getRegions();
      this.regionList = res.data;
    },
  },
};
</script>
