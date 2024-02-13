<template>
  <v-menu offset-y style="position: absolute" content-class="mt-7">
    <template v-slot:activator="{ on, attrs }">
      <div class="lang_switch" v-bind="attrs" v-on="on">
        <!-- <v-icon color="white"> mdi-web </v-icon> -->
        <span>Русский</span>
        <v-icon color="white"> mdi-chevron-down </v-icon>
      </div>
    </template>
    <v-list class="lang_list">
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title class="lang_switch--title">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "CLangSwitch",
  data: () => ({
    items: [
      { title: "Казахский" },
      { title: "Русский" },
      { title: "Английский" },
    ],
  }),
};
</script>

<style lang="scss">
.lang_switch {
  display: flex;
  align-items: center;
  gap: 9px;
  span {
    font-size: 20px;
  }
  &--title {
    cursor: pointer;
  }
  &--title:hover {
    color: #008bcf;
  }
}
.lang_list {
  &--title {
    cursor: pointer;
  }
}
</style>
