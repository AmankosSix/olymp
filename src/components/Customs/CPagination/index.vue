<template>
  <div>
    <v-pagination
      v-if="this.meta.total"
      :class="{
        prev_not: this.changePagination === 1,
        first_pages: this.changePagination <= 3,
        last_pages: this.changePagination + 4 > this.visibleLength,
        next_not: this.changePagination === this.visibleLength,
      }"
      v-model="changePagination"
      :length="visibleLength"
      :total-visible="visiblePage"
    >
    </v-pagination>
  </div>
</template>

<script>
export default {
  name: "CPagination",
  model: {
    prop: "page",
    event: "changePagination",
  },
  props: {
    meta: {
      type: Object,
      default() {
        return {};
      },
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: 1,
      totalItems: 40, // Общее количество элементов в вашем наборе данных
    };
  },
  computed: {
    changePagination: {
      get() {
        return this.page;
      },
      set(value) {
        this.$emit("changePagination", value);
      },
    },
    visiblePage() {
      return this.changePagination <= 3 ||
        this.changePagination === this.visibleLength
        ? 7
        : 7;
    },
    visibleLength() {
      // return this.currentPage <= 4 ? 5 : this.totalItems;
      return this.meta.total - 1;
    },
  },
  watch: {
    changePagination() {
      this.update();
    },
  },
  methods: {
    update() {
      this.$router
        .push({
          path: this.$route.path,
          query: { page: this.changePagination },
          hash: "#scroll-block",
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="scss">
.prev_not {
  .v-pagination > li:first-child {
    display: none;
  }
}
.next_not {
  .v-pagination > li:last-child {
    display: none;
  }
}
.v-pagination {
  &__item {
    box-shadow: none;
    color: #008bcf !important;
    border-radius: 0%;
    border-bottom: 2px solid #0000000d;
  }
  &__item--active {
    color: #ffffff !important;
  }
  &__navigation {
    box-shadow: none;
    border-radius: 0%;
    border-bottom: 2px solid #0000000d;
    i {
      color: #008bcf !important;
    }
  }
  &__more {
    position: relative;
    &::before {
      content: "/";
      background: #ffffff;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      color: #008bcf;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.first_pages {
  .v-pagination__more {
    display: none;
  }
  .v-pagination {
    li:nth-last-child(2) {
      position: relative;
      margin-left: 50px;
      &::before {
        content: "/";
        font-weight: bold;
        font-size: 20px;
        background: #ffffff;
        position: absolute;
        left: -100%;
        color: #008bcf;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 5px;
        width: 77%;
        height: 77%;
      }
    }
  }
}
.last_pages {
  .v-pagination__more {
    display: none;
  }
  .v-pagination {
    li:nth-child(2) {
      position: relative;
      margin-right: 60px;
      &::before {
        content: "/";
        font-weight: bold;
        font-size: 20px;
        background: #ffffff;
        position: absolute;
        right: -100%;
        top: 5px;
        width: 77%;
        height: 77%;
        color: #008bcf;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
