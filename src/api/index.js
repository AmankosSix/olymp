import instance from "./instance";
import mainPage from "./mainPage";
import news from "./news";
import federation from "./federation";
import athletes from "./athletes";
import games from "./games";
import videos from "./videos";
import accreditation from "./accreditation";

import about from "./about";
const federationId = localStorage.getItem("federation");

const api = {
  mainPage: mainPage(instance, "ru", federationId),
  news: news(instance, "ru", federationId),
  federation: federation(instance, "ru", federationId),
  athletes: athletes(instance, "ru", federationId),
  games: games(instance, "ru", federationId),
  videos: videos(instance, "ru"),
  accreditation: accreditation(instance, "ru"),
  about: about(instance, "ru"),
};

export default api;
