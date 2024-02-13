<template>
  <div>
    <div class="d-flex align-center cursor-pointer ml-4" @click="toggleMenu">
      <base-icon width="59" height="59" icon="menu" />
      <!-- <span class="font-weight-medium fs-20 ml-4">Меню</span> -->
    </div>
    <transition name="slide-fade">
      <div
        v-if="isActive"
        transition="slide-x-transition"
        class="menu__block pt-7"
      >
        <v-container class="menu__block--container">
          <div
            class="menu__block--container--close d-flex align-center cursor-pointer"
            @click="toggleMenu"
          >
            <base-icon width="59" height="59" icon="menuClose" />
            <span class="font-weight-medium fs-20 ml-4">Закрыть</span>
          </div>
          <v-row class="mt-11">
            <v-col cols="12" lg="9">
              <v-row>
                <v-col
                  v-for="(item, i) in pageList"
                  :key="i"
                  cols="12"
                  sm="12"
                  md="4"
                  class="mb-md-10 py-0"
                >
                  <div class="menu__block--item">
                    <span>0{{ i + 1 }}</span>
                    <div class="menu__block--item__list">
                      <router-link
                        class="menu__block--item__list--title"
                        :to="item.src"
                        @click.native="toggleMenu"
                      >
                        {{ item.title }}
                      </router-link>
                      <ul
                        v-for="(link, j) in item.list"
                        :key="j"
                        class="menu__block--item__list__links pl-0"
                      >
                        <li>
                          <router-link
                            class="menu__block--item__list__links--link"
                            :to="link.src"
                            @click.native="toggleMenu(link)"
                            >{{ link.title }}</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="3">
              <v-row>
                <v-col cols="12" class="">
                  <div class="menu__block--social">
                    <div
                      v-for="(item, i) in socialList"
                      :key="i"
                      class="menu__block--social__list pb-10"
                    >
                      <h2 class="menu__block--social__list--title">
                        {{ item.title }}
                      </h2>
                      <ul class="menu__block--social__list__links">
                        <li v-for="(link, j) in item.list" :key="j">
                          <router-link
                            class="menu__block--social__list__links--link"
                            :to="link.src"
                            @click.native="toggleMenu"
                            >{{ link.title }}</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CMenu",
  props: ["list"],
  data() {
    return {
      isActive: false,
      socialList: [
        {
          title: "Полезные ссылки",
          list: [
            {
              title: "Связаться с нами",
              src: "/",
            },
            {
              title: "О нас",
              src: "/",
            },
            {
              title: "Партнеры и спонсоры",
              src: "/",
            },
            {
              title: "Меди и пресса",
              src: "/",
            },
            {
              title: "Аккредитованные тренировоные залы",
              src: `/${this.$i18n.locale}/accreditation`,
            },
            {
              title: "Олимпийская солидарность",
              src: `/${this.$i18n.locale}/page/olimpiyskaya-solidarnost`,
            },
            {
              title: "Олимпийская хартия",
              src: `/${this.$i18n.locale}/page/olimpiyskaya-khartiya`,
            },
            {
              title: "Международные федерации",
              src: `/${this.$i18n.locale}/page/mezhdunarodnye-sportivnye-federacii`,
            },
            {
              title: "МОК",
              src: `/${this.$i18n.locale}/page/mok`,
            },
            {
              title: "АНОК",
              src: `/${this.$i18n.locale}/page/anoc`,
            },
            {
              title: "ОСА",
              src: `/${this.$i18n.locale}/page/osa`,
            },
            {
              title: "Спортивная медицина и антидопинг",
              src: `/${this.$i18n.locale}/page/155-sportivnaya-meditsina-i-antidoping`,
            },
            {
              title: "Республика Казахстан",
              src: `/${this.$i18n.locale}/page/respublika-kazakhstan`,
            },
          ],
        },
        {
          title: "Социальные сети",
          list: [
            {
              title: "Instagram",
              src: "/",
            },
            {
              title: "YouTube",
              src: "/",
            },
            {
              title: "Tik Tok",
              src: "/",
            },
            {
              title: "Facebook",
              src: "/",
            },
          ],
        },
      ],
      pageList: [
        {
          title: "Новости",
          src: `/${this.$i18n.locale}/news`,
          list: [
            {
              title: "Казахстанские",
              src: `/${this.$i18n.locale}/news?tab=1#scroll-block`,
            },
            {
              title: "Международные",
              src: `/${this.$i18n.locale}/news?tab=2#scroll-block`,
            },
            {
              title: "Интервью",
              src: `/${this.$i18n.locale}/news?tab=3#scroll-block`,
            },
            {
              title: "Аналитика",
              src: `/${this.$i18n.locale}/news?tab=4#scroll-block`,
            },
          ],
        },
        {
          title: "Федерации",
          src: `/${this.$i18n.locale}/federations`,
          list: [
            {
              title: "Бокс",
              src: "/",
              id: 6,
            },
            {
              title: "Борьба",
              src: "/",
              id: 7,
            },
            {
              title: "Волейбол",
              src: "/",
              id: 10,
            },
            {
              title: "Велоспорт",
              src: "/",
              id: 8,
            },
          ],
        },
        {
          title: "Спортсмены",
          src: `/${this.$i18n.locale}/athletes`,
          list: [
            {
              title: "Ольга Рыпакова",
              src: `/${this.$i18n.locale}/athletes/72-olga-rypakova`,
            },
            {
              title: "Юлия Галышева",
              src: `/${this.$i18n.locale}/athletes/1615-yuliya-galysheva`,
            },
            {
              title: "Ельдос Сметов",
              src: `/${this.$i18n.locale}/athletes/73-eldos-smetov`,
            },
            {
              title: "Дмитрий Баландин",
              src: `/${this.$i18n.locale}/athletes/69-dmitriy-balandin`,
            },
            {
              title: "Данияр Елеусинов",
              src: `/${this.$i18n.locale}/athletes/68-daniyar-eleusinov`,
            },
          ],
        },
        {
          title: "Игры",
          src: `/${this.$i18n.locale}/games`,
          list: [
            {
              title: "Париж 2024",
              src: `/${this.$i18n.locale}/games-detail/40-parizh-2024`,
            },
            {
              title: "Милан-Кортина 2026",
              src: `/${this.$i18n.locale}/games-detail/36-milan-kortina-2026`,
            },
            {
              title: "Лос-Анджелес 2028",
              src: `/${this.$i18n.locale}/games-detail/33-los-andzheles-2028`,
            },
            {
              title: "Канвон 2024",
              src: `/${this.$i18n.locale}/games-detail/37-kanvon-2024`,
            },
          ],
        },
        {
          title: "Медиатека",
          src: `/${this.$i18n.locale}/videos`,
          list: [
            {
              title: "Фото",
              src: `/${this.$i18n.locale}/photos`,
            },
            {
              title: "Видео",
              src: `/${this.$i18n.locale}/videos`,
            },
          ],
        },
        {
          title: "О нас",
          src: `/${this.$i18n.locale}/about/o-nok`,
          list: [
            {
              title: "Антикоррупционная политика",
              src: `/${this.$i18n.locale}/about/391-antikorruptsionnaya-politika`,
            },
            {
              title: "Официальные документы",
              src: `/${this.$i18n.locale}/about/36-ofitsialbnye-dokumenty`,
            },
            {
              title: "Партнеры",
              src: `/${this.$i18n.locale}/about/partnery-i-sponsory-nok-rk`,
            },
            {
              title: "Проекты",
              src: `/${this.$i18n.locale}/about/proekty-nok-rk`,
            },
            {
              title: "Контакты",
              src: `/${this.$i18n.locale}/about/kontakty`,
            },
          ],
        },
        // {
        //   title: "Республика Казахстан",
        //   list: [
        //     {
        //       title: "Общие сведения",
        //       src: `/${this.$i18n.locale}/page/respublika-kazakhstan`,
        //     },
        //     {
        //       title: "Государственный флаг РК",
        //       src: "/",
        //     },
        //     {
        //       title: "Государственный герб РК",
        //       src: "/",
        //     },
        //     {
        //       title: "Государственный гимн РК",
        //       src: "/",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    toggleMenu(link) {
      if (link.id) {
        localStorage.setItem("federation", link.id);
        window.location.reload();
      }
      const b = document.querySelector("html");
      this.isActive
        ? (b.style.overflow = "auto")
        : (b.style.overflow = "hidden");
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
.fs-20 {
  font-size: 20px;
}
.menu__block {
  overflow-y: auto;
  &--container {
    max-width: 100% !important;
    padding: 0 5%;
  }
  &::before {
    z-index: -1;
    content: "";
    position: fixed;
    background: $blue-main;
    bottom: 0;
    top: 0;
    right: 0;
    width: 39%;
  }
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: #202328;
  &--item {
    display: flex;
    gap: 15px;
    & > span {
      color: #008bcf;
      font-weight: 700;
      font-size: 33px;
    }
    &__list {
      width: 50%;
      &--title {
        font-size: 33px;
      }
      &__links {
        list-style: none;
        padding-left: 0;
        &--link {
          font-weight: 300;
          display: block;
          color: #ffffff !important;
          text-decoration: none;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
      }
    }
  }
  &--social {
    &__list {
      width: 100%;
      &--title {
        font-size: 33px;
        // color: #202328;
        white-space: nowrap;
      }
      &__links {
        list-style: none;
        &--link {
          font-weight: 300;
          display: block;
          margin-bottom: 12px;
          color: #ffffff !important;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
