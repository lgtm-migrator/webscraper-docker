import React, { useContext } from "react";
import SubmitButton from "../components/submit-button";
import NewpaperButton from "../components/newpaper-button";
import { Context } from "../Store";

export default function DashboardView() {
  const [state, dispatch] = useContext(Context);
  return (
    <div className="dashboard">
      <h1 className="title">Web Scraper</h1>
      {state.urls.map((item) => (
        <NewpaperButton
          key={item.name}
          item={item}
        />
      ))}
      <SubmitButton />
    </div>
  );
}
