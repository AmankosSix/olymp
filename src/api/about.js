export default (instance, lang = "ru", federationId = "NULL") => {
  return {
    getAboutCategory() {
      return instance.get(
        `/${lang}/sections?federation=${federationId}&parent_id=1`
      );
    },
    getAboutInfo(id) {
      return instance.get(`/${lang}/section/${id}?federation=NULL`);
    },
    getDocsCategories(id) {
      return instance.get(`/docs_categories?language=${lang}&parent_id=${id}`);
    },
    getOtherCategory(id) {
      return instance.get(`/${lang}/section/${id}?federation=NULL`);
    },
    getOtherTabs(parent_id) {
      return instance.get(
        `/${lang}/sections?federation=NULL&parent_id=${parent_id}`
      );
    },
  };
};
