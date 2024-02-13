<template>
  <section class="pt-10 news__variant" id="about-athlete">
    <v-container class="forAboutAthlete">
      <h2 class="news--title">О СПОРТСМЕНЕ</h2>
      <div class="about--red"></div>

      <div class="about--wrap">
        <!-- <div class="about--title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div> -->
        <div class="about--title" v-html="item.description"></div>
      </div>
      <div class="about-wrapper">
        <div class="about-sportsman">
          <c-img adaptive :src="item?.avatar" alt="sports" />
        </div>
        <div class="about-sportsman-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "AboutAthlete",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.about--red {
  border-bottom: 5px solid #ed4058;
  width: 77px;
}
.about--title {
  font-size: 27px;
  font-weight: 500;
  color: #050050;
}
.about--wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.about--p {
  margin-top: 90px;
  font-size: 27px;
  font-weight: 400;
  color: #050050;
  margin-left: 90px;
}
.about-sportsman-text {
  margin-top: -90px;
  padding: 40px;
  padding-top: 100px;
  background-color: #ed4058;
  z-index: 1;
  width: 45%;
  font-size: 27px;
  font-weight: 500;
  color: #fff;
}
.about-wrapper {
  margin-top: 100px;
}
.about-sportsman {
  z-index: 2;
  width: 50%;
  margin-left: 10%;
}
.about-sportsman img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.forAboutAthlete {
  position: relative;
  padding-bottom: 55vh;
}
</style>
