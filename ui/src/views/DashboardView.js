import React, { useContext } from "react";
import SubmitBtn from "../components/SubmitBtn";
import UrlBtn from "../components/UrlBtn";
import { Context } from "../Store";
import Msg from "../components/Msg";

export default function DashboardView() {
  const [state, dispatch] = useContext(Context);
  return (
    <div className="dashboard">
      <h1 className="title">Web Scraper</h1>
      {state.urls.map((url) => (
        <UrlBtn key={url.name} url={url} />
      ))}
      {state.showBtnActions ? <SubmitBtn /> : <Msg />}
    </div>
  );
}
