<template>
  <section class="game__detail__athletes bg-main" v-if="listAthletes?.length">
    <v-container>
      <h2 class="news--title" style="color: #fff !important" id="scroll-block">
        ЛИЦЕНЗИИ #TEAMKZ
      </h2>
      <div>
        <div class="accreditation--wrap mt-10">
          <v-text-field
            outlined
            color="white"
            label="Имя спортсмена"
            class="custom-autocomplete custom-text-field"
            v-model="athlet"
            :style="{ height: '48px' }"
          ></v-text-field>
          <v-autocomplete
            v-model="sportType"
            :items="listFed"
            label="Вид спорта / дисциплина"
            solo
            item-text="sport"
            item-value="sport"
            class="custom-autocomplete"
            no-data-text="Ничего не найдено"
          ></v-autocomplete>
          <v-autocomplete
            v-model="genderType"
            :items="genderItems"
            label="Пол"
            solo
            item-text="gender"
            item-value="id"
            class="custom-autocomplete"
            no-data-text="Ничего не найдено"
          ></v-autocomplete>
          <div>
            <button @click="chooseFilter" class="accreditation--btn">
              Фильтровать
            </button>
          </div>
        </div>
        <div class="accreditation--flex">
          <div class="accreditation--undertitle" v-if="meta.totalelem">
            Всего найдено атлетов :
            {{ meta.totalelem }}
          </div>
          <button
            :style="{
              display: sportType || genderType || athlet ? 'block' : 'none',
            }"
            class="accreditation--undertitle accreditation--undertitle__btn"
            @click="clearSelect"
          >
            Сбросить
          </button>
        </div>
      </div>

      <div class="game__detail__athletes--grid">
        <router-link
          v-for="item in listAthletes"
          :key="item.id"
          :to="item.alias"
          class="game__detail__athletes--card"
          :disabled="!whateverActivatesThisLink"
          :event="whateverActivatesThisLink ? 'click' : ''"
        >
          <div class="game__detail__athletes--wrap">
            <c-img
              class="game__detail__athletes--img"
              :src="item.avatar"
              alt=""
            />
          </div>
          <div class="game__detail__athletes--wrapper">
            <div class="game__detail__athletes--title">{{ item.name }}</div>
            <div class="game__detail__athletes--subtitle">
              {{ item.subtitle }}
            </div>
          </div>
        </router-link>
      </div>
      <c-pagination
        v-if="meta.total > 1"
        style="margin-top: 40px"
        :meta="meta"
        v-model="page"
      />
    </v-container>
  </section>
</template>

<script>
import CPagination from "@/components/Customs/CPagination";
export default {
  name: "CGamesDetailAthletes",
  components: {
    CPagination,
  },
  props: {
    listAthletes: {
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
    listFed: {
      type: Array,
      default() {
        return [];
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
      sportType: null,
      genderType: "",
      genderItems: [
        {
          gender: "Мужской",
          id: 1,
        },
        {
          gender: "Женский",
          id: 2,
        },
        {
          gender: "Все спортсмены",
          id: "",
        },
      ],
      athlet: "",
    };
  },
  methods: {
    chooseFilter() {
      this.$emit("chooseFilter", {
        gender: this.genderType,
        sport: this.sportType,
        search: this.athlet,
        page: 1,
      });
    },
    clearSelect() {
      this.$emit("clear-select", { page: 1 });
      this.sportType = "";
      this.genderType = "";
      this.athlet = "";
    },
  },
};
</script>

<style>
.custom-autocomplete .v-text-field__details {
  display: none !important;
}
.custom-autocomplete .v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 48px;
}
.custom-text-field .v-label {
  color: white !important; /* Set label text color to white */
}

.custom-text-field fieldset {
  border: 2px solid white; /* Set white border */
}
.custom-text-field .v-input__slot input {
  color: white !important; /* Set text color to white */
  font-size: 22px !important;
}
</style>
