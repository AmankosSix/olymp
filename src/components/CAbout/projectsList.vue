<template>
  <section class="mt-10">
    <v-container>
      <div class="about__docs about__projects">
        <!-- <h1 class="about__app__list--title">О нас</h1> -->
        <div class="about__doc__tabs">
          <div
            class="about__doc__tabs--item"
            :class="{ active: active === i }"
            v-for="(item, i) in data?.categories"
            :key="item.id"
            @click="sendParentDoc(i)"
          >
            <v-icon x-large>mdi-file-document-outline</v-icon>
            <p class="mb-0">{{ item.name }}</p>
          </div>
        </div>
        <div
          v-if="activeTab"
          v-html="activeTab"
          class="about__projects__content"
        ></div>
        <p v-else>Документы отсутсвуют</p>
        <!-- <v-row>
          <v-col cols="12" sm="3" v-for="(item, i) in list" :key="i">
            <div class="about__app__list--item">
              <c-img :src="item.img" alt="" defaultType="images/sections" />
              <div class="about__app__list--item__info">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </v-col>
        </v-row> -->
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "docsList",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    activeTab() {
      return this.data?.categories[this.active].description || null;
    },
  },
  methods: {
    sendParentDoc(id) {
      this.active = id;
    },
  },
};
</script>
