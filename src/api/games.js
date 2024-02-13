export default (instance, lang = "ru") => {
  return {
    getGames() {
      return instance.get(`/${lang}/games`);
    },
    getGameDetail(id) {
      return instance.get(`/games/${id}?language=${lang}`);
    },
    gamesParticipants({ id, page, count, gender, sport, search }) {
      let queries = {};
      queries.page = page;
      count ? (queries.count = count) : "";
      gender ? (queries.gender = gender) : "";
      sport ? (queries.sport = sport) : "";
      search ? (queries.search = search) : "";
      return instance.get(`/games_participants/${id}?language=${lang}`, {
        params: queries,
      });
    },
    gamesCategories(id) {
      return instance.get(`/games_categories/${id}?language=${lang}`);
    },
  };
};
