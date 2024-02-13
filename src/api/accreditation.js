export default (instance, lang = "ru") => {
  return {
    getAccreditationList({ page, count, region_id, federaion_id }) {
      let queries = {};
      queries.page = page;
      count ? (queries.count = count) : "";
      region_id ? (queries.region_id = region_id) : "";
      federaion_id ? (queries.federaion_id = federaion_id) : "";
      return instance.get(`/${lang}/accreditations`, { params: queries });
    },
    getAccreditationDetailList(alt, page = 1, count = 10) {
      return instance.get(
        `/${lang}/accreditations/${alt}?page=${page}&count=${count}`
      );
    },
  };
};
