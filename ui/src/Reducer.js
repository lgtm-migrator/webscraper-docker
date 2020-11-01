const Reducer = (state, action) => {
  switch (action.type) {
    case "API":
      return {
        ...state,
        api: action.payload,
      };
    case "URLS_CHOSEN":
      return {
        ...state,
        urls: action.payload,
      };
    case "SHOW_BTN_ACTIONS":
      return {
        ...state,
        showBtnActions: action.payload,
      };
    case "Dl_BTN_DSBLD":
      return {
        ...state,
        dlBtnDsbld: action.payload,
      };
    case "ERR_MSG":
      return {
        ...state,
        errMsg: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
