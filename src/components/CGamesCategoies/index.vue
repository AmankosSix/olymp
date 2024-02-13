<template>
  <section v-if="listGamesCategories?.length">
    <v-container>
      <div class="game__detail__athletes">
        <h2 class="news--title">ВИДЫ СПОРТА</h2>
        <div class="kinds__sports--wrap">
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
              v-for="item in visibleCategories"
              :key="item.id"
              class="expansion-panel"
            >
              <v-expansion-panel-header class="v-expasion-custom">
                {{ item.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- Содержимое внешнего блока -->
                <v-expansion-panels v-if="item.children" variant="accordion">
                  <v-expansion-panel
                    v-for="itemChild in item.children"
                    :key="itemChild.id"
                    class="inactive-panel"
                  >
                    <v-expansion-panel-header class="no-arrow">
                      {{ itemChild.name }}
                    </v-expansion-panel-header>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-btn @click="showAllCategories" v-if="!showAll" class="nextShow"
            >Посмотреть еще</v-btn
          >
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "CKindsSports",
  props: {
    listGamesCategories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      visibleCategories: [],
      showAll: false,
    };
  },
  methods: {
    showAllCategories() {
      this.visibleCategories = this.listGamesCategories;
      this.showAll = true;
    },
    showInitialCategories() {
      this.visibleCategories = this.listGamesCategories.slice(0, 6);
    },
  },
  mounted() {
    this.showInitialCategories();
  },
  watch: {
    listGamesCategories: "showInitialCategories",
  },
};
</script>

<style>
.inactive-panel {
  pointer-events: none;
  cursor: not-allowed;
}
.no-arrow .v-expansion-panel-header__icon {
  display: none;
}
.expansion-panel-content {
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
  max-height: 2000px;
}

.inactive-panel .expansion-panel-content {
  max-height: 0;
}
.nextShow {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}
/* .expansion-panel:nth-last-child(-n + 2) {
  background-color: #f0f0f000 !important;
  opacity: 0.4;
}
.v-expansion-panel:nth-last-child(-n + 2)::before {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 0px 0px rgb(0 0 0 / 0%),
    0px 1px 5px 0px rgb(0 0 0 / 17%);
} */
</style>
