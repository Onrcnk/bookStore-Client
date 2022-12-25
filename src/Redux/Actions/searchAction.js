const setSearchAction = (search) => ({
  type: "SET_SEARCH_ACTION",
  search,
});

const resetSearchAction = () => ({
  type: "RESET_SEARCH_ACTION",
});

export { setSearchAction, resetSearchAction };