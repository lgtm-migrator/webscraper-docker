import React, { useContext } from "react";
import { Context } from "../Store";
import DownloadBtn from "./DownloadBtn";

export default function DownloadButton() {
  const [state, dispatch] = useContext(Context);
  const actionsBtnFunction = () => {
    dispatch({ type: "Dl_BTN_DSBLD", payload: true });
  };
  return (
    <div class="ui msg message">
      <div class="header">Success !</div>
      <p>Now, you can download your file</p>
      <DownloadBtn />
    </div>
  );
}
