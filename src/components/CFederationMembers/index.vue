<template>
  <section class="pb-15 pt-10 news__variant" id="federation-athlete">
    <v-container>
      <h2 class="news--title">ЧЛЕНЫ ФЕДЕРАЦИИ БОКСА</h2>
      <div class="members_cards">
        <router-link
          :to="{ name: 'athletes-detail', params: { id: item.alt } }"
          v-for="(item, index) of list"
          :key="index"
        >
          <div class="athlete-img">
            <c-img :src="item.avatar" alt="athlete" />
          </div>
          <div class="athlete-name">
            {{ item.name }}
            <!-- <span class="athlete-last-name">
              {{ item.lastName }}
            </span> -->
          </div>
          <div class="athlete-sport">{{ item.sport }}</div>
          <div class="athlete-bb"></div>
        </router-link>
      </div>
      <div v-if="!more" class="athlete-load" @click="addMoreList">
        Загрузить еще
      </div>
      <div v-else class="athlete-load" @click="linkToAthlete">Смотреть все</div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "CFederationMembers",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      more: false,
    };
  },
  methods: {
    addMoreList() {
      this.$emit("addList", 2);
      this.more = true;
    },
    linkToAthlete() {
      this.$router.push({ name: "athletes" });
    },
  },
};
</script>
<style last="scss">
.members_cards {
  display: grid;
  grid-template-columns: repeat(4, 23%);
  grid-gap: 30px 45px;
  margin-top: 40px;
}
.athlete-name {
  font-weight: 400;
  font-size: 27px;
  color: #050050;
}
.athlete-img {
  width: 110px;
  height: 110px;
}
.athlete-img img {
  border-radius: 50%;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.athlete-bb {
  border: 2px solid #050050;
  width: 55px;
}
.athlete-last-name {
  font-size: 26px;
  font-weight: 600;
  color: #050050;
}
.athlete-sport {
  font-size: 17px;
  font-weight: 500;
  color: #ed4058;
  margin: 10px 0;
}
.athlete-load {
  font-weight: 600;
  font-size: 27px;
  text-align: center;
  color: #050050;
  text-transform: uppercase;
  margin-top: 50px;
  cursor: pointer;
}
</style>
