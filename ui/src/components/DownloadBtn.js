import React, { useContext } from "react";
import { Context } from "../Store";

export default function DownloadButton() {
  const [state, dispatch] = useContext(Context);
  const downloadFile = async () => {
    const myData = state.api;
    console.log(state.api)
    console.log(myData, 'mydata')
    const fileName = "file";
    const json = JSON.stringify(myData);
    const blob = new Blob([json], { type: "application/json" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    dispatch({ type: "Dl_BTN_DSBLD", payload: true });
  };
  return (
    <div>
      <button
        onClick={() => downloadFile()}
        className={
          state.dlBtnDsbld
            ? `disabled button ui actions-btn`
            : `button ui actions-btn`
        }
      >
        <i className="download icon"></i>Download
      </button>
    </div>
  );
}
