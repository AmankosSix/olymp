<template>
  <article class="news__item mb-10">
    <router-link
      class="news__item--link"
      :to="{ name: 'news-detail', params: { id: item.id } }"
    >
      <div class="news__item--sp hover-event">
        <c-img :src="item.avatar" :alt="item.name" />
      </div>
      <div class="news__item__info">
        <p class="news__item__info--text ma-0">
          <span v-if="item.hot" class="news__item__info--hot">Важно</span>
          {{ item.name }}
        </p>
        <div class="d-flex align-center justify-space-between">
          <p class="news__item__info--date ma-0">
            {{ getDate(item.published_at) }}
          </p>
          <p class="news__item__info--views ma-0">
            <span>{{ item.views }}</span>
            <v-icon class="ml-1" color="gray">mdi-eye-outline</v-icon>
          </p>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  name: "CNewsItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getDate(date_at) {
      return new Date(date_at).toLocaleDateString();
    },
  },
};
</script>

<style lang="scss">
.news__item {
  position: relative;
  height: 100%;
  &::before {
    z-index: 1 !important;
  }
  &:hover {
    img {
      width: 100%;
    }
    .news__item__info {
      bottom: 18px;
    }
  }
  // &--sp {
  //   display: inline;
  //   &::before {
  //     z-index: 0 !important;
  //   }
  // }
  &--link {
    display: block;
    height: 100%;
  }
  img {
    position: relative;
    transition: 0.4s;
    object-fit: cover;
    width: 95%;
    height: 340px;
    border: 1px solid #828282;
  }
  &__info {
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #828282;
    gap: 10px;
    position: absolute;
    width: 40%;
    bottom: -12px;
    right: 12px;
    background: #ffffff;
    padding: 30px 18px;
    div {
      width: 100%;
    }
    &--text {
      font-weight: 700;
      font-size: 15px;
      line-height: 19px;
      color: $blue-main;
    }
    &--date {
      font-weight: 400;
      font-size: 12px;
      color: $blue-main;
    }
    &--views {
      font-weight: 400;
      font-size: 14px;
      color: gray;
      i {
        font-size: 18px !important;
      }
    }
    &--hot {
      font-size: 14px;
      border-radius: 6px;
      padding: 1px 6px;
      display: inline;
      background: red;
      color: #ffffff;
    }
  }
}
</style>
