const actions = {
  setHeaderlogo({ commit }, logo) {
    localStorage.setItem("logo", logo);
    commit("UPDATE_HEADER_LOGO", logo);
  },
  setHeaderCatalog({ commit }, title) {
    commit("UPDATE_HEADER_CATALOG", title);
  },
  addItemCart({ commit }, item) {
    commit("UPDATE_CART", item);
  },
  addSavedCart({ commit }, item) {
    commit("UPDATE_SAVED_CART", item);
  },
};

export default actions;
