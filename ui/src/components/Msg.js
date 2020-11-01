import React, { useContext } from "react";
import { Context } from "../Store";
import DownloadBtn from "./DownloadBtn";

export default function DownloadButton() {
  const [state, dispatch] = useContext(Context);
  const actionsBtnFunction = () => {
    dispatch({ type: "Dl_BTN_DSBLD", payload: true });
  };
  return (
    <div className="ui msg message">
      <div className="header">Success !</div>
      <p>Now, you can download your file</p>
      <DownloadBtn />
    </div>
  );
}
