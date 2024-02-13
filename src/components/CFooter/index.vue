<template>
  <div>
    <c-partners-list />
    <v-footer class="footer" padless>
      <v-container class="footer__block">
        <div class="footer__block__logo">
          <img src="@/assets/img/noc_kz.png" alt="" />
          <p>
            национальный <br />
            олимпийский комитет республики казахстан
          </p>
        </div>
        <!-- <nav class="footer__block__menu">
          <ul class="footer__block__menu__list">
            <li>Новости</li>
            <li>Федерации</li>
            <li>Спортсмены</li>
            <li>Игры</li>
            <li>О нас</li>
          </ul>
        </nav> -->
        <div class="footer__block__links">
          <a class="footer__block__links--phone" href="">+ 7 (7172) 57 47 14</a
          ><a class="footer__block__links--mail" href=""
            >mail:office@olympic.kz</a
          >
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import CPartnersList from "@/components/CPartnersList";
export default {
  name: "CFooter",
  components: { CPartnersList },
};
</script>

<style lang="scss">
.footer {
  background-color: $blue-main !important;
  position: relative;
  z-index: 1;
  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
      display: flex;
      gap: 14px;
      p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25.3px;
        text-transform: uppercase;
        color: #ffffff;
      }
      img {
        width: 69px;
        height: 69px;
      }
    }
    &__menu {
      width: 100%;
      display: flex;
      justify-content: center;
      &__list {
        position: relative;
        display: flex;
        list-style: none;
        padding-left: 0;
        gap: 30px;
        li {
          font-size: 20px;
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }
    &__links {
      &--phone,
      &--mail {
        color: #ffffff !important;
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
        display: block;
      }
    }
  }
}
</style>
