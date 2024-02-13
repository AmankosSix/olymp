<template>
  <section class="mt-10">
    <v-container>
      <div class="about__app__list">
        <!-- <h1 class="about__app__list--title">О нас</h1> -->
        <v-row>
          <v-col cols="12" sm="3" v-for="(item, i) in data?.employees" :key="i">
            <div class="about__app__list--item">
              <c-img :src="item.img" alt="" defaultType="images/sections" />
              <div class="about__app__list--item__info">
                <h2>{{ item.title }}</h2>
                <div v-html="item.description"></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "aboutList",
  data() {
    return {};
  },
  props: {
    data: {
      type: Array || Object,
      default() {
        return {};
      },
    },
  },
};
</script>
