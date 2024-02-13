export default (instance, lang = "ru", federationId) => {
  return {
    getMainPageInfo() {
      const id = federationId || "NULL";
      return instance.get(`/mainpage/${lang}/settings?federation=${id}`);
    },
    getMenu() {
      return instance.get(`/${lang}/pop-up`);
    },
  };
};
