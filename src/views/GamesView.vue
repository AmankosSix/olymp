<template>
  <main>
    <c-games
      :newList="newList"
      :oldList="oldList"
      :meta="meta"
      :types="gamesType"
    />
  </main>
</template>

<script>
import CGames from "@/components/CGames";

export default {
  name: "GamesView",
  components: {
    CGames,
  },
  data() {
    return {
      gamesType: {
        1: "Олимпийские игры",
        2: "Азиатские игры",
        3: "Юношеские олимпийские игры",
      },
      newList: [],
      oldList: [],
      meta: {},
    };
  },
  async mounted() {
    const res = await this.api.games.getGames();

    this.oldList = res.data?.old;
    this.newList = res.data?.new;
  },
};
</script>

<style></style>
