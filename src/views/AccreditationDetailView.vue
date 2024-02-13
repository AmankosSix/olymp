<template>
  <main>
    <c-sport-hall-detail :item="item" />
  </main>
</template>

<script>
import CSportHallDetail from "@/components/CSportHallDetail";
export default {
  name: "AccreditationDetailView",
  components: {
    CSportHallDetail,
  },
  data() {
    return {
      item: [],
    };
  },
  mounted() {
    this.getAccreditationDetail();
  },
  methods: {
    async getAccreditationDetail() {
      const res = await this.api.accreditation.getAccreditationDetailList(
        this.$route.params.id
      );
      this.item = res.data[0];
    },
  },
};
</script>
