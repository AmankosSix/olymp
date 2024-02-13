<template>
  <section class="news__screen video__screen__detail">
    <v-container>
      <div class="videos__detail--wrap">
        <div v-for="list in videosList" :key="list.id">
          <div>
            <router-link
              :to="{ name: 'videosDetail', params: { id: list.id } }"
              class="video-list__youtube"
              v-if="list.preview"
            >
              <img
                :src="`//img.youtube.com/vi/${list.key}/maxresdefault.jpg`"
                alt="sport"
              />
            </router-link>
            <div v-else v-html="list.script" class="video-list__youtube"></div>
          </div>
          <router-link
            :to="{ name: 'videosDetail', params: { id: list.id } }"
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
  name: "CVideosList",
  components: { CPagination },
  props: {
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
