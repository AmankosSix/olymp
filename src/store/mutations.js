const mutations = {
  UPDATE_HEADER_LOGO(state, val) {
    state.headerLogo = val;
  },
  UPDATE_HEADER_CATALOG(state, val) {
    state.headerCatalog = val;
  },
  UPDATE_CART(state, item) {
    const index = state.cart.findIndex((el) => el.itemId === item.id);
    if (index >= 0 && item?.count > 0) state.cart[index].count = item.count;
    else if (item?.count === 0) state.cart.splice(index, 1);
    else state.cart.push({ itemId: item.id, count: 1, ...item });
    localStorage.setItem(
      "cart",
      JSON.stringify(state.cart.length ? state.cart : "")
    );
  },
  UPDATE_SAVED_CART(state, arr) {
    state.cart = arr;
  },
};

export default mutations;
