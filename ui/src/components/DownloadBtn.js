import React, { useContext } from "react";
import { Context } from "../Store";

export default function DownloadButton() {
  const [state, dispatch] = useContext(Context);
  const actionsBtnFunction = () => {
    dispatch({ type: "Dl_BTN_DSBLD", payload: true });
  };
  return (
    <div>
      <button
        onClick={() => actionsBtnFunction()}
        className={state.dlBtnDsbld ? `disabled button ui actions-btn` : `button ui actions-btn`}
      >
        <i className="download icon"></i>Download
      </button>
    </div>
  );
}
