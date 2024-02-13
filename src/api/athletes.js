export default (instance, lang = "ru", federationId = "NULL") => {
  return {
    getAthletesList({ page = 1, search, count = 12 }) {
      let queries = {};
      queries.page = page;
      queries.federation = federationId;
      count ? (queries.count = count) : "";
      search ? (queries.search = search) : "";
      return instance.get(`/${lang}/champions`, {
        params: queries,
      });
    },
    getAthletesDetail(id) {
      return instance.get(`/${lang}/champions/${id}`);
    },
    getAthleteImage(id) {
      return instance.get(`/images/champions/${id}/unconted_sm.jpg`);
    },
  };
};
