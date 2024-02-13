<template>
  <section class="news__screen video__screen__detail">
    <v-container>
      <div class="videos__detail--wrap">
        <div
          class="videos__detail--blog"
          v-for="list in photosList"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
          :key="list.id"
        >
          <div>
            <router-link
              :to="{ name: 'photosDetail', params: { id: list.id } }"
              class="video-list__youtube"
            >
              <c-img
                :src="list.avatar"
                alt="avatar"
                defaultType="images/sections"
              />
            </router-link>
          </div>
          <router-link
            :to="{ name: 'photosDetail', params: { id: list.id } }"
            class="videos__title"
          >
            {{ list.name }}
          </router-link>
          <div class="videos__subtitle">
            {{ getDateList(list.published_at) }}
          </div>
        </div>
      </div>
      <c-pagination v-if="meta.totalElem > 1" :meta="meta" v-model="page" />
    </v-container>
  </section>
</template>
<script>
import { getDate } from "@/services/datesFromat";
import CPagination from "@/components/Customs/CPagination";
export default {
  name: "CPhotosList",
  components: {
    CPagination,
  },
  props: {
    photosList: {
      type: Array,
      default() {
        return [];
      },
    },
    videosList: {
      type: Array,
      default() {
        return [];
      },
    },
    meta: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    page(val) {
      this.$emit("page", val);
    },
  },
  data() {
    return {
      page: +this.$route.query.page || 1,
    };
  },
  methods: {
    getDateList(dd) {
      return getDate(dd);
    },
  },
};
</script>
