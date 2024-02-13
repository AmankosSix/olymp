<template>
  <section class="sport__hall">
    <v-container>
      <div class="sport__hall--grid">
        <router-link
          v-for="item in listSportHall"
          :key="item.id"
          :to="{
            name: 'accreditationDetail',
            params: { id: item.alt },
          }"
          class="sport__hall--card"
        >
          <div class="sport__hall--wrap">
            <c-img
              class="sport__hall--img"
              :src="item.avatar"
              :alt="item.name"
            />
          </div>
          <div class="sport__hall--wrapper">
            <div class="sport__hall--title">{{ item.name }}</div>
            <div class="sport__hall--subtitle">
              {{ item.region }}
            </div>
          </div>
        </router-link>
      </div>
      <c-pagination style="margin-top: 40px" :meta="lastMeta" v-model="page" />
    </v-container>
  </section>
</template>

<script>
import CPagination from "@/components/Customs/CPagination";
export default {
  name: "SportHall",
  components: {
    CPagination,
  },
  props: {
    listSportHall: {
      type: Array,
      default() {
        return [];
      },
    },
    lastMeta: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    page(val) {
      this.$emit("page", { page: val });
    },
  },
  data() {
    return {
      page: +this.$route.query.page || 1,
    };
  },
};
</script>
