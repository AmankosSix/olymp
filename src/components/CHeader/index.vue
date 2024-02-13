<template>
  <header :class="{ header_bg: isScrolled }" v-scroll="handleScroll">
    <v-container class="d-flex justify-space-between align-center">
      <img class="img-logo" :src="logo" alt="" @click="federationClear" />
      <nav>
        <ul class="menu__list">
          <li>
            <router-link :to="{ name: 'news' }">Новости</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'federations' }">Федерации</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'athletes' }">Спортсмены</router-link>
          </li>
          <li><router-link :to="{ name: 'games' }">Игры</router-link></li>
          <li>
            <router-link :to="{ name: 'videos' }">Медиатека</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about', params: { alt: 'o-nok' } }"
              >О нас</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="d-flex justify-space-between align-center">
        <c-search />
        <c-lang-switch />
        <c-menu class="header__menu" :list="list" />
      </div>
    </v-container>
  </header>
</template>

<script>
const federation = localStorage.getItem("federation");
import CMenu from "@/components/CMenu";
import CLangSwitch from "@/components/CLangSwitch";
import CSearch from "@/components/CSearchWindow";
import { mapGetters } from "vuex";
export default {
  name: "CHeader",
  props: ["list"],
  data() {
    return {
      isScrolled: false,
    };
  },
  components: {
    CMenu,
    CLangSwitch,
    CSearch,
  },
  computed: {
    scrollTopHeader() {
      return true;
    },
    imageBaseUrl() {
      return process.env.VUE_APP_IMAGE_BASE_URL;
    },
    ...mapGetters({
      getHeaderLogo: "getHeaderLogo",
    }),
    logo() {
      return this.getHeaderLogo && federation
        ? this.imageBaseUrl + this.getHeaderLogo
        : require("../../assets/img/logo_nok.png");
    },
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition >= 100) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    federationClear() {
      localStorage.removeItem("federation");
      window.location.href = "/";
      this.$router.push({ name: "home" }).catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(process.env);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
.img-logo {
  cursor: pointer;
  width: 80px;
  border-radius: 50%;
  transition: 0.3s;
  background: #ffffff;
  height: 80px;
}
.header__menu svg {
  transition: 0.3s;
}
header {
  transition: 0.4s;
  position: fixed;
  margin-top: 28px;
  width: 100%;
  z-index: 10;
  color: #ffffff;
}
.header_bg {
  margin-top: 0;
  position: fixed;
  width: 100%;
  background: $blue-main;
  .menu__list::before {
    content: none;
  }
  .img-logo {
    width: 60px;
    height: 60px;
  }
  .header__menu svg {
    width: 50px;
  }
  & > .container {
    padding: 6px 12px;
  }
}
.menu__list {
  position: relative;
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 30px;
  &::before {
    content: " ";
    height: 1px;
    width: 120%;
    position: absolute;
    bottom: -27px;
    transform: translate(-10%, 0);
    background: #ffffff;
  }
  li {
    font-size: 20px;
    a {
      color: #ffffff;
    }
  }
}
</style>
