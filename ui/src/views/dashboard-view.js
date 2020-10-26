import React from "react";
import { ValidateContextProvider } from "../context/validate-context";
import ValidateButton from "../components/validate-button";
const urls = ["hackernews.com", "test2", "test3", "test4"];

export default function DashboardView() {
  return (
    <ValidateContextProvider>
      <h1 className="title">Web Scraper</h1>
      {urls.map((item) => (
        <h3>{item}</h3>
      ))}
      <ValidateButton />
    </ValidateContextProvider>
  );
}
