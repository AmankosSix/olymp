<template>
  <section class="contact">
    <v-row>
      <v-col md="10" offset-md="2">
        <div fluid class="contact__block">
          <v-row>
            <v-col cols="12" sm="8">
              <h2>Партнеры</h2>
              <div class="contact__block_list">
                <a
                  v-for="(item, index) in list"
                  :key="index"
                  :href="item.link"
                  target="_blank"
                >
                  <img
                    class="contact__block_list--img"
                    :src="require(`@/assets/img/part/${item.img}`)"
                    alt=""
                  />
                </a>
              </div>
            </v-col>
            <v-col cols="12" sm="4">
              <h2>Социальные сети:</h2>
              <div class="contact__block__list">
                <a href="" class="contact__block__list--item">
                  <v-icon color="#809eb4">mdi-instagram</v-icon>
                  <span>Инстаграм</span>
                </a>
                <a href="" class="contact__block__list--item">
                  <v-icon color="#809eb4">mdi-youtube</v-icon>
                  <span>YouTube</span>
                </a>
                <a href="" class="contact__block__list--item">
                  <v-icon color="#809eb4">mdi-facebook</v-icon>
                  <span>Facebook</span>
                </a>
                <a href="" class="contact__block__list--item">
                  <v-icon color="#809eb4">mdi-twitter</v-icon>
                  <span>twitter</span>
                </a>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "CContactUs",
  data() {
    return {
      email: "",
      consent: false,
      list: [
        {
          img: "part1.png",
          link: "https://www.toyotakz.com/",
        },
        {
          img: "part2.png",
          link: "https://halykbank.kz/",
        },
        {
          img: "part3.png",
          link: "https://sportqory.kz/ru/",
        },
        {
          img: "part4.png",
          link: "http://kaznadc.kz/",
        },
        {
          img: "part5.png",
          link: "https://sk.kz/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.contact {
  position: relative;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  background: $blue-main;
  min-height: 300px;
  z-index: 1;
  .v-text-field__details {
    display: none;
  }
  &__block {
    border: 1px solid $blue-main;
    border-right: none;
    position: relative;
    top: -50px;
    right: -12px;
    padding: 70px 25px 25px;
    background: #ffffff;
    z-index: 1;
    &__list {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      &--item {
        display: flex;
        align-items: center;
        gap: 10px;
        span {
          color: #809eb4 !important;
        }
      }
    }
    &_list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-right: 1px solid lightgray;
      gap: 38px;
      overflow-x: auto;
      &--img {
        width: 100%;
        max-width: 98px;
      }
    }
  }
}
</style>
