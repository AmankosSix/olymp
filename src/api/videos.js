export default (instance, lang = "ru") => {
  return {
    getVideosPoints(page = 1, count, sort, id) {
      let request = {};
      request.page = page;
      count ? (request.count = count) : "";
      sort ? (request.sort = sort) : "";
      id ? (request.video_id = id) : "";
      return instance.get(`/${lang}/videos`, { params: request });
    },
    getVideosDetail(id) {
      return instance.get(`/${lang}/videos/${id}`);
    },
    getPhotosPoints(page = 1, count, sort, id) {
      let request = {};
      request.page = page;
      count ? (request.count = count) : "";
      sort ? (request.sort = sort) : "";
      id ? (request.photo_id = id) : "";
      return instance.get(`/${lang}/photo_categories`, { params: request });
    },
    getPhotosDetail(id) {
      return instance.get(`/${lang}/photos/${id}`);
    },
  };
};
