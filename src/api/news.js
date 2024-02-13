export default (instance, lang = "ru", federationId) => {
  return {
    getNewsDetail(id) {
      return instance.get(`/${lang}/news/${id}`);
    },
    getNews({ page = 1, type, count, newsId, search }) {
      let queries = {};
      queries.page = page;
      queries.search = search;
      type ? (queries.category_id = type) : "";
      search ? (queries.search = search) : "";
      federationId ? (queries.federation = federationId) : "";
      count ? (queries.count = count) : "";
      newsId ? (queries.news_id = newsId) : "";
      return instance.get(`/${lang}/news`, { params: queries });
    },
  };
};
