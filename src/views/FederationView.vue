<template>
  <main>
    <section class="federations">
      <div class="federations--overlay" :class="{ scrolled: isScrolled }"></div>
      <c-img
        adaptive
        placeholder
        class="federations--img"
        :src="avatar"
        alt=""
      />
      <div
        class="federations__titles"
        v-scroll-animate="{
          animation: 'animate__fadeInUp',
        }"
      >
        <p
          class="federations__titles--summer"
          :class="{ active: federationList === 1 }"
          @click="toggleList(1)"
        >
          ЛЕТНИЕ
        </p>
        <span class="federations__titles--preset">/</span>
        <p
          class="federations__titles--snow"
          :class="{ active: federationList === 2 }"
          @click="toggleList(2)"
        >
          ЗИМНИЕ
        </p>
      </div>
    </section>
    <section>
      <div class="federations__list">
        <div class="federations__list--dark"></div>
        <v-container>
          <transition name="fade">
            <v-row key="1" v-if="federationList === 1">
              <v-col
                class="federations__list--item"
                v-for="(item, i) in list"
                :key="i"
                cols="12"
                sm="4"
                v-scroll-animate="{
                  animation: 'animate__fadeInUp',
                }"
              >
                <div
                  @click="setFederation(item.id)"
                  :class="{ 'fs-18': item.id === 2 }"
                >
                  {{ item.sport }}
                </div>
              </v-col>
            </v-row>
            <v-row key="2" v-else>
              <v-col
                class="federations__list--item"
                v-for="(item, i) in list"
                :key="i"
                cols="12"
                sm="4"
              >
                <div
                  @click="setFederation(item.id)"
                  :class="{ 'fs-18': item.id === 2 }"
                >
                  {{ item.sport }}
                </div>
              </v-col>
            </v-row>
          </transition>
        </v-container>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "FederationView",
  props: {
    bgFix: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiskrasport.ru%2Fsport%2Fotdeleniya%2Fvoleybol%2F&psig=AOvVaw0d9OIT2rfObPmYUMms4ziu&ust=1693131139697000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNCZl5SL-oADFQAAAAAdAAAAABAJ",
    },
  },
  data() {
    return {
      federationList: 1,
      list: [],
      avatar: null,
      isScrolled: false,
    };
  },
  methods: {
    toggleList(type) {
      this.federationList = type;
      this.getFederationList();
    },
    async getFederationList() {
      const res = await this.api.federation.getFederationsList(
        this.federationList
      );
      this.list = res.data[0];
      this.avatar = res.data[1];
    },
    setFederation(id) {
      localStorage.setItem("federation", id);
      window.location.href = "/";
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getFederationList();
  },
  beforeDestroy() {
    // Удалите обработчик события при разрушении компонента
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.scrolled {
  background: #000000bf !important;
}
.federations__list {
  position: relative;
  padding: 100px 0;
  &--dark {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &--item {
    z-index: 2;

    div {
      cursor: pointer;
      height: 100%;
      color: #ffffff;
      padding: 0 16px 16px;
      font-size: 25px;
      font-weight: 600;
      border-bottom: 1px solid #ffffff;
      display: block;
      transition: 0.2s;
      &:hover {
        border-color: $blue;
        color: $blue;
      }
    }
  }
}
.federations__img-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  // background-image: url("@/assets/img/federation.png");
  background-image: var(--bgfix);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.federations {
  position: relative;
  margin-top: 170px;
  display: flex;
  align-items: end;
  justify-content: center;
  overflow: hidden;
  &--img {
    // filter: brightness(50%);
    // width: 100%;
    // height: 100vh;
    // object-fit: cover;
    // position: absolute;
    // top: 0;
    // bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    bottom: 0;
  }
  &--overlay {
    transition: 0.3s;
    position: fixed;
    top: 0;
    z-index: 1;
    height: 100vh;
    width: 100%;
    background: rgb(0 0 0 / 54%);
  }
  &__titles {
    position: relative;
    z-index: 1;
    display: flex;
    padding-bottom: 100px;
    & > p {
      color: transparent;
      -webkit-text-stroke: 2px #ffffff;
      text-stroke: 2px #ffffff;
      -webkit-background-clip: text;
      background-clip: text;
      font-size: 110px;
      font-weight: 600;
      transition: 0.4s;
      cursor: pointer;
    }
    &--preset {
      font-size: 110px;
      font-weight: 700;
      color: #008bcf;
    }
    .active {
      color: #ffffff;
    }
  }
}
.fs-18 {
  font-size: 18px !important;
}
.fed__partners {
  z-index: 2;
  position: relative;
}
</style>
