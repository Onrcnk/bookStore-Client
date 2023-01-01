const INITIAL_STATE = ("");

const bookDescriptionPopupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_OPEN_FOR_BOOK_DESCRIPTION_POPUP_ACTION':
      return (open);
      break;

    default:
      return state;
      break;
  }
};

export default bookDescriptionPopupReducer;