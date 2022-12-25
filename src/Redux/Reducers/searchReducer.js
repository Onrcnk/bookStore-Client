const INITIAL_STATE = { search: '' };

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SEARCH_ACTION':
      return { ...state, search: action.search };
      break;

    case 'RESET_SEARCH_ACTION':
      return INITIAL_STATE;
      break;

    default:
      return state;
      break;
  }
};

export default searchReducer;
