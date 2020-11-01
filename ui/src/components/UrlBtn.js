import React, { useContext } from "react";
import { Context } from "../Store";
import PropTypes from 'prop-types';

export default function NewpaperButton(props) {
  const [state, dispatch] = useContext(Context);
  const updateArray = (id) => {
    let tempStateUrls = state.urls;
    tempStateUrls[id].check = tempStateUrls[id].check ? 0 : 1;
    dispatch({ type: "URLS_CHOSEN", payload: tempStateUrls });
    dispatch({ type: "SHOW_BTN_ACTIONS", payload: true });
    dispatch({ type: "Dl_BTN_DSBLD", payload: false });
    dispatch({ type: "ERR_MSG", payload: false });
  };
  return (
    <div>
      <button
        onClick={() => updateArray(props.url.id)}
        className={props.url.check ? "url-btn-actv" : "url-btn"}
      >
        {props.url.name}
      </button>
    </div>
  );
  NewpaperButton.propTypes = {
    url: PropTypes.object
  }
}
