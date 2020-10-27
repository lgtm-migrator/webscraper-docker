import React, { useState } from "react";
import { ValidateContextProvider } from "../context/validate-context";
import SubmitButton from "../components/submit-button";
import NewpaperButton from "../components/newpaper-button";
import DownloadButton from "../components/download-button";

export default function DashboardView() {
  const [urls, setUrls] = useState([
    { id: 0, name: "hackernews.com", class: "newpaper-button" },
    { id: 1, name: "test2", class: "newpaper-button" },
    { id: 2, name: "test3", class: "newpaper-button" },
    { id: 3, name: "test4", class: "newpaper-button" },
  ]);
  return (
    <ValidateContextProvider>
      <div className="dashboard">
        <h1 className="title">Web Scraper</h1>
        {urls.map((item) => (
          <NewpaperButton item={item} />
        ))}
        <SubmitButton />
      </div>
    </ValidateContextProvider>
  );
}
