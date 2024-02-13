export default (instance, lang = "ru", federationId) => {
  return {
    getFederationsList(season = 1) {
      return instance.get(`/${lang}/federations?season=${season}`);
    },
    getFederationDetail() {
      const id = federationId;
      return instance.get(`/${lang}/federations/${id}`);
    },
    getRegions() {
      return instance.get(`/${lang}/regions`);
    },
  };
};
