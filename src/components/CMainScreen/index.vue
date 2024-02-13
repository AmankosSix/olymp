<template>
  <div class="main__screen">
    <v-container>
      <div>
        <h1 class="main__screen__list--title">{{ title }}</h1>
        <div
          v-if="!federation"
          class="main__screen__list"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          <!-- :style="{
              background: item?.style.bgColor,
            }" -->
          <router-link
            :to="{ name: 'news-detail', params: { id: item.id } }"
            class="main__screen__list--item hover-event"
            v-for="(item, index) in slider"
            :key="index"
          >
            <div>
              <span class="main__screen__list--item__type label_type">{{
                item?.tag || "Новость"
              }}</span>
              <!-- <h2
                v-if="item.annotation"
                class="main__screen__list--item__title"
              >
                {{ item?.annotation }}
              </h2> -->
              <p class="main__screen__list--item__desc">
                {{ item?.name }}
              </p>
            </div>

            <span class="main__screen__list--item__link"
              ><base-icon width="31" height="24" icon="arrowLeft"
            /></span>
          </router-link>
          <!-- <div class="d-flex" style="gap: 10px">
            <div style="margin-top: 10px">
              <div
                class="main__screen__list--item"
                style="margin-bottom: 10px"
                v-for="(item, index) in slider"
                :style="{ background: item?.style.bgColor }"
                :key="index"
              >
                <div>
                  <span class="main__screen__list--item__type label_type">{{
                    item?.tag || "Новость"
                  }}</span>
                  <h2
                    v-if="item.annotation"
                    class="main__screen__list--item__title"
                  >
                    {{ item?.annotation }}
                  </h2>
                  <p class="main__screen__list--item__desc">
                    {{ item?.name }}
                  </p>
                </div>

                <router-link
                  class="main__screen__list--item__link"
                  :to="{ name: 'news-detail', params: { id: item.id } }"
                  ><base-icon width="31" height="24" icon="arrowLeft"
                /></router-link>
              </div>
            </div>
            <div>
              <div
                class="main__screen__list--item"
                v-for="(item, index) in slider"
                style="margin-bottom: 10px"
                :style="{ background: item?.style.bgColor }"
                :key="index"
              >
                <div>
                  <span class="main__screen__list--item__type label_type">{{
                    item?.tag || "Новость"
                  }}</span>
                  <h2
                    v-if="item.annotation"
                    class="main__screen__list--item__title"
                  >
                    {{ item?.annotation }}
                  </h2>
                  <p class="main__screen__list--item__desc">
                    {{ item?.name }}
                  </p>
                </div>

                <router-link
                  class="main__screen__list--item__link"
                  :to="{ name: 'news-detail', params: { id: item.id } }"
                  ><base-icon width="31" height="24" icon="arrowLeft"
                /></router-link>
              </div>
            </div>
          </div> -->
        </div>
        <div v-else class="athlete--block d-flex athlete--block--rakhat">
          <div class="athlete--left-side">
            <div class="athlete--title">ОЛИМПИЙСКИЕ МЕДАЛИ</div>
            <div class="athlete--blog">
              <div class="athlete--medal gold">{{ slider.medals?.gold }}</div>
              <div class="athlete--medal silver">
                {{ slider.medals?.silver }}
              </div>
              <div class="athlete--medal bronze">
                {{ slider.medals?.bronze }}
              </div>
            </div>
          </div>
          <div class="athlete--right-side">
            <div class="athlete--title">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</div>
            <div class="athlete--fed athlete--fed--rakhat">
              <div class="athlete--subtitle">
                Федерации:
                <a :href="slider.url">{{ hideHTTP(slider.url) }}</a>
              </div>

              <div class="athlete--subtitle">
                Дисциплина:
                <a :href="slider.world_url">{{ hideHTTP(slider.world_url) }}</a>
              </div>
            </div>
            <div class="athlete--border-bottom"></div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CMainScreen",
  props: {
    slider: {
      type: Array,
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      federation: localStorage.getItem("federation") || null,
      list: [
        {
          type: "ТЯЖЕЛАЯ АТЛЕТИКА",
          title: "АРЛИ ЧОНТЕЙ",
          desc: `Арли Чонтей стал бронзовым призером Чемпионата Азии по тяжелой атлетике`,
          link: "/",
          bg: "#FFCC29",
        },
        {
          type: "ТЯЖЕЛАЯ АТЛЕТИКА",
          title: "АРЛИ ЧОНТЕЙ",
          desc: `Арли Чонтей стал бронзовым призером Чемпионата Азии по тяжелой атлетике`,
          link: "/",
          bg: "#008BCF",
        },
        {
          type: "ТЯЖЕЛАЯ АТЛЕТИКА",
          title: "АРЛИ ЧОНТЕЙ",
          desc: `Арли Чонтей стал бронзовым призером Чемпионата Азии по тяжелой атлетике`,
          link: "/",
          bg: "#ED4058",
        },
        {
          type: "ТЯЖЕЛАЯ АТЛЕТИКА",
          title: "АРЛИ ЧОНТЕЙ",
          desc: `Арли Чонтей стал бронзовым призером Чемпионата Азии по тяжелой атлетике`,
          link: "/",
          bg: "#ED4058",
        },
        {
          type: "ТЯЖЕЛАЯ АТЛЕТИКА",
          title: "АРЛИ ЧОНТЕЙ",
          desc: `Арли Чонтей стал бронзовым призером Чемпионата Азии по тяжелой атлетике`,
          link: "/",
          bg: "#ED4058",
        },
      ],
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${require("@/assets/img/mainScreen.png")})`,
      };
    },
  },
  methods: {
    hideHTTP(str) {
      return str?.replace("http://", "");
    },
  },
};
</script>

<style lang="scss">
.main__screen {
  position: relative;
  min-height: 100vh;
  &__list {
    position: relative;
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    height: 100%;

    &--item {
      cursor: pointer;
      max-width: 300px;
      padding: 30px 20px;
      background: $blue;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &__type {
        background: #ffffff !important;
        color: black;
        margin-bottom: 10px !important;
      }
      &__title {
        color: #ffffff;
        text-transform: uppercase;
        font-size: 22px;
        text-decoration: underline;
        font-weight: 500;
        margin-bottom: 23px;
      }
      &__desc {
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 80px;
      }
      &__link {
        padding-left: auto;
        svg {
          path {
            fill: #ffffff;
          }
          float: right;
        }
      }
    }
  }
}
.athlete--block--rakhat {
  bottom: -4% !important;
  z-index: 2;
}
.athlete--fed--rakhat {
  align-items: baseline !important;
}
.athlete--fed--rakhat .athlete--subtitle a {
  color: #fff;
  text-decoration: underline !important;
  transition: 0.3s;
}
.athlete--fed--rakhat .athlete--subtitle a:hover {
  text-decoration: none !important;
}
</style>
