<template>
  <section class="olimp_games" :class="{ federationBefore: reverse }">
    <v-container class="d-flex flex-column">
      <div :class="{ orderSecond: reverse }">
        <h2
          class="olimp_games--title title-line"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          СОБЫТИЯ
        </h2>
        <v-row>
          <!-- <v-col cols="12" md="6">
            <div
              class="olimp_games--item"
              :style="{ background: item?.style.bgColor }"
              v-scroll-animate="{
                animation: `animate__fadeInUp`,
              }"
            >
              <span
                class="olimp_games--item__type"
                :style="{
                  color: item?.style.tagTextColor,
                  background: item?.style.tagBgColor,
                }"
                >отчет</span
              >
              <p
                class="olimp_games--item__title"
                :style="{ color: item?.style.textTitleColor }"
              >
                Париж 2024
              </p>
              <div
                class="olimp_games--item__desc"
                :style="{ color: item?.style.textDateColor }"
              >
                <p class="mb-0">323</p>
                <p class="mb-0">Дня</p>
              </div>
            </div>
          </v-col> -->
          <v-col cols="12" md="4" class="d-flex flex-column">
            <div
              class="olimp_games--item"
              v-scroll-animate="{
                animation: `animate__fadeInUp`,
              }"
              @click="$router.push('/ru/games-detail/40-parizh-2024')"
            >
              <span class="olimp_games--item__type">Ожидается</span>
              <p class="olimp_games--item__title">Париж 2024</p>
              <div class="olimp_games--item__desc">
                <p class="mb-0">323</p>
                <p class="mb-0">Дней</p>
              </div>
            </div>
            <div
              class="olimp_games--item mt-5"
              :style="{ background: '#EB7100' }"
              v-scroll-animate="{
                animation: `animate__fadeInUp`,
              }"
              @click="$router.push('/ru/games-detail/36-milan-kortina-2026')"
            >
              <span class="olimp_games--item__type">Ожидается</span>
              <p class="olimp_games--item__title">Милан-Кортина 2026</p>
              <div class="olimp_games--item__desc">
                <p class="mb-0">883</p>
                <p class="mb-0">Дней</p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div
              class="international--item"
              v-scroll-animate="{
                animation: 'animate__fadeInUp',
              }"
            >
              <c-img
                class="international--item__img"
                :src="getUrlCompetitions(competitions[0])"
                alt=""
              />
              <div>
                <span class="international--item__type label_type">{{
                  competitions[0]?.style.tag
                    ? competitions[0]?.style.tag
                    : "Ожидается"
                }}</span>
                <p class="international--item__title">
                  <!-- <span class="international--item__title--date">{{
                    competitions[0]?.description
                  }}</span> -->
                  <br />
                  <span>{{ competitions[0]?.name }}</span>
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div
              class="international--item"
              v-scroll-animate="{
                animation: 'animate__fadeInUp',
              }"
            >
              <c-img
                class="international--item__img"
                :src="getUrlCompetitions(competitions[1])"
                alt=""
              />
              <div>
                <span class="international--item__type label_type">{{
                  competitions[1]?.style.tag
                    ? competitions[1]?.style.tag
                    : "Ожидается"
                }}</span>
                <p class="international--item__title">
                  <!-- <span class="international--item__title--date">{{
                    competitions[1]?.description
                  }}</span> -->
                  <br />
                  <span>{{ competitions[1]?.name }}</span>
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <div
              class="international--item international--item--all"
              v-scroll-animate="{
                animation: 'animate__fadeInUp',
              }"
            >
              <div>
                <span class="international--item__type label_type">{{
                  competitions[2]?.style.tag
                    ? competitions[2]?.style.tag
                    : "Ожидается"
                }}</span>
                <p class="international--item__title">
                  <!-- <span class="international--item__title--date">{{
                    competitions[0]?.description
                  }}</span> -->
                  <br />
                  <span>{{ competitions[2]?.name }}</span>
                </p>
              </div>

              <c-img
                class="international--item__img"
                :src="getUrlCompetitions(competitions[2])"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
      </div>
      <!-- <h2
        class="olimp_games--title mt-10"
        v-scroll-animate="{
          animation: 'animate__fadeInUp',
        }"
      >
        МЕЖДУНАРОДНЫЕ СОРЕВНОВАНИЯ
      </h2>
      <v-row class="mb-10">
        <v-col cols="12">
          <div
            class="international--item"
            v-scroll-animate="{
              animation: 'animate__fadeInUp',
            }"
          >
            <span
              v-if="competitions[0]?.style.tag"
              class="international--item__type label_type"
              >{{ competitions[0]?.style.tag }}</span
            >
            <p class="international--item__title">
              <span class="international--item__title--date">{{
                competitions[0]?.description
              }}</span>
              <br />
              <span>{{ competitions[0]?.name }}</span>
            </p>
            <c-img
              class="international--item__img"
              :src="competitions[0]?.style?.bg"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
      <v-row :class="{ orderFirst: reverse }">
        <v-col cols="12" md="6">
          <div
            class="personal--item"
            :class="{ fedFlex: reverse }"
            v-scroll-animate="{
              animation: 'animate__fadeInUp',
            }"
          >
            <span
              v-if="competitions[1]?.style.tag"
              class="personal--item__type label_type"
              >{{ competitions[1]?.style.tag }}</span
            >
            <h3 class="personal--item__title">{{ competitions[1]?.name }}</h3>
            <c-img
              class="personal--item__img"
              :src="competitions[1]?.style?.bg"
              alt=""
            />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div
            class="personal--item"
            :class="{ fedFlex: reverse }"
            v-scroll-animate="{
              animation: 'animate__fadeInUp',
            }"
          >
            <span
              v-if="competitions[2]?.style.tag"
              class="personal--item__type label_type"
              >{{ competitions[2]?.style.tag }}</span
            >
            <h3 class="personal--item__title">{{ competitions[2]?.name }}</h3>

            <c-img
              class="personal--item__img"
              :src="competitions[2]?.style?.bg"
              alt=""
            />
          </div>
        </v-col> 
      </v-row> -->
      <slot />

      <!-- <div class="main__videos" style="position: relative">
        <h2
          class="olimp_games--title"
          v-scroll-animate="{
            animation: 'animate__fadeInUp',
          }"
        >
          МОМЕНТЫ
        </h2>
        <div
          class="main__videos--wrap"
          v-scroll-animate="{
            animation: `animate__fadeInUp`,
          }"
        >
          <router-link
            v-for="(list, index) in photoList"
            :key="list.id"
            :class="[
              'main__videos--list',
              { wide: index === photoList.length - 1 },
            ]"
            :to="{ name: 'photosDetail', params: { id: list.id } }"
          >
            <div class="video-list__youtube">
              <c-img
                :src="list.avatar"
                alt="sport"
                defaultType="images/sections"
              />
            </div>
            <div class="main__videos--bottom-wrap">
              <div class="main__videos--name">
                {{ list.name }}
              </div>
              <div class="d-flex justify-space-between main__videos--bottom">
                <div>{{ getDateList(list.published_at) }}</div>
                <div>Смотреть</div>
              </div>
            </div>
          </router-link>
        </div>
      </div> -->
    </v-container>
    <video-play
      @close="openModal = false"
      :open="openModal"
      :activeVideo="activeVideo"
    />

    <div class="main__videos" style="position: relative">
      <v-container style="mb-5">
        <div class="title__block">
          <h2
            class="olimp_games--title title-line"
            v-scroll-animate="{
              animation: 'animate__fadeInUp',
            }"
          >
            ВИДЕО
          </h2>
          <router-link :to="{ name: 'videos' }"
            >Посмотреть все <base-icon width="31" height="24" icon="arrowLeft"
          /></router-link>
        </div>

        <div class="main__videos--wrap d-flex row">
          <v-col cols="12" md="4" v-for="list in videosList" :key="list?.id">
            <!-- :to="{ name: 'videosDetail', params: { id: list.id } }" -->
            <div
              class="main__videos--list"
              v-scroll-animate="{
                animation: `animate__fadeInUp`,
              }"
              @click="(openModal = true), (activeVideo = list)"
            >
              <div class="video-list__youtube">
                <div>
                  <v-icon x-large>mdi-play</v-icon>
                </div>
                <c-img
                  :src="`//img.youtube.com/vi/${list.key}/maxresdefault.jpg`"
                  alt="sport"
                  :base-url="false"
                />
              </div>
              <div class="main__videos--bottom-wrap">
                <div class="main__videos--name">{{ list.name }}</div>
                <div class="d-flex justify-space-between main__videos--bottom">
                  <div>{{ getDateList(list.published_at) }}</div>
                </div>
              </div>
            </div>
          </v-col>
        </div>
      </v-container>
    </div>
    <div style="position: relative; min-height: 100vh">
      <video
        autoplay
        loop
        muted
        playsinline
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(35%);
        "
      >
        <source src="/img/video_bg.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
</template>

<script>
import { getDate } from "@/services/datesFromat";
import videoPlay from "@/components/CModal/types/videoPlay.vue";
export default {
  name: "CNewsDay",
  props: {
    title: {
      type: String,
      default: "ОЛИМПИЙСКИЕ ИГРЫ",
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    games: {
      type: Array,
      default() {
        return [];
      },
    },
    competitions: {
      type: Array,
      default() {
        return [];
      },
    },
    videosList: {
      type: Array,
      default() {
        return [];
      },
    },
    photoList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    videoPlay,
  },
  data() {
    return {
      openModal: false,
      activeVideo: {},
    };
  },
  methods: {
    getDateList(dd) {
      return getDate(dd);
    },
    getUrlCompetitions(test) {
      return `/images/competitions/${test?.id}/${test?.avatar}`;
    },
  },
};
</script>

<style lang="scss">
.olimp_games {
  padding-top: 50px;
  &--title {
    font-size: 50px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 50px;
  }
  &--item {
    z-index: 1;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 30px 20px;
    background: $blue !important;
    &__type {
      position: relative;
      background: #ffffff;
      display: inline-block;
      text-transform: uppercase;
      margin-bottom: 10px;
      font-size: 1rem;
      font-weight: 500;
      padding: 5px 10px;
      border-radius: 10px;
    }
    &__title {
      position: relative;
      font-size: 30px;
      color: #ffffff;
      font-weight: 500;
    }
    &__desc {
      position: relative;
      display: flex;
      align-items: flex-end;
      gap: 5px;
      color: #ffffff;
      p:first-child {
        font-size: 70px;
        font-weight: 700;
        line-height: 70px;
      }
      p:last-child {
        font-size: 30px;
        font-weight: 500;
      }
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: $blue-main;
      top: 0;
      z-index: 0;
      left: -100%;
      transition: 0.4s;
    }
    &:hover {
      &::before {
        left: 0;
      }
    }
  }
  .international--item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-end;
    min-height: 300px;
    &__img {
      filter: brightness(70%);
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    div {
      position: relative;
      width: 100%;
      .label_type {
        margin-bottom: 5px;
        position: relative;
      }
      padding: 10px 20px 30px;
      background: $blue;
      &::before {
        transition: 0.4s;
        content: "";
        position: absolute;
        top: -150px;
        left: 0;
        height: 150px;
        background: linear-gradient(to top, $blue, transparent);
        width: 100%;
      }
    }
    &__title {
      position: relative;
      font-size: 22px;
      font-weight: 500;
      color: #ffffff;
      margin-bottom: 0;
      z-index: 1;
      span {
        display: -webkit-box;
        -webkit-line-clamp: 2; // количество строк
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      &--date {
        font-size: 22px;
      }
    }
    &__type {
      z-index: 1;
    }
    &:hover {
      div {
        &::before {
          top: -100px;
        }
      }
    }
  }
  .international--item--all {
    flex-direction: column;
    align-items: flex-start;
    .international--item__img {
      width: 60%;
      left: 40%;
    }
    div {
      z-index: 1;
      height: 100%;
      width: 40%;
      &::before {
        top: 0;
        left: auto;
        right: -150px;
        width: 150px;
        height: 100%;
        background: linear-gradient(to right, $blue, transparent);
      }
    }
    &:hover {
      div {
        &::before {
          top: 0;
          right: -100px;
        }
      }
    }
  }
  .personal--item {
    position: relative;
    height: 100%;
    &__img {
      object-fit: cover;
      width: 100%;
      height: 340px;
    }
    &__title {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 30px;
      color: #ffffff;
    }
    &__type {
      position: absolute;
      top: 30px;
      left: 20px;
      z-index: 1;
    }
  }
}
.orderFirst {
  margin-top: 50px !important;
  order: 0 !important;
}
.orderSecond {
  order: 1 !important;
  margin-bottom: 70px;
}
.orderThird {
  order: 2 !important;
}
.fedFlex {
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
}
.fedFlex .personal--item__title {
  margin-top: 10px;
}
.displayNone {
  display: none;
  margin-top: 0;
}
.federationBefore::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  // background: #ffffff;
}
.federationBefore .olimp_games--title {
  margin-bottom: 0;
}
</style>
