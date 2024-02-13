<template>
  <section class="accreditation">
    <v-container>
      <h2 class="news--title games-detail-title">
        АККРЕДИТОВАННЫЕ ТРЕНИРОВОЧНЫЕ БАЗЫ
      </h2>
      <div class="accreditation--wrap">
        <v-autocomplete
          v-model="sportType"
          :items="listFed"
          label="Выберите вид спорта"
          solo
          item-text="sport"
          item-value="id"
          class="custom-autocomplete"
          no-data-text="Ничего Не найдено"
        ></v-autocomplete>
        <v-autocomplete
          v-model="regionType"
          :items="regionList"
          label="Выберите регион"
          solo
          item-text="name"
          item-value="id"
          class="custom-autocomplete"
          no-data-text="Ничего не найдено"
        ></v-autocomplete>
        <div>
          <button @click="chooseSelect" class="accreditation--btn">
            Показать результаты
          </button>
        </div>
      </div>
      <div class="accreditation--flex">
        <div class="accreditation--undertitle" v-if="lastMeta.totalElem">
          Всего найдено аккредитованных тренировочных баз :
          {{ lastMeta.totalElem }}
        </div>
        <button
          :style="{ display: regionType || sportType ? 'block' : 'none' }"
          class="accreditation--undertitle accreditation--undertitle__btn"
          @click="clearSelect"
        >
          Сбросить
        </button>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "CAccreditationFilter",
  props: {
    listFed: {
      type: Array,
      default() {
        return [];
      },
    },
    regionList: {
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
  data() {
    return {
      sportType: null,
      regionType: null,
    };
  },
  methods: {
    chooseSelect() {
      this.$emit("chooseSelect", {
        federaion_id: this.sportType,
        region_id: this.regionType,
        page: 1,
      });
    },
    clearSelect() {
      this.$emit("clear-select", { page: 1 });
      this.sportType = "";
      this.regionType = "";
    },
  },
};
</script>

<style>
.custom-autocomplete .v-text-field__details {
  display: none;
}
</style>
