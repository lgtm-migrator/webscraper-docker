import React from "react";
import axios from "axios";

export default function CounterButtons() {
  const handleClick = () => {
    axios
      .post("http://localhost:8080/api/new", {
        url: "https://thehackernews.com",
      })
      .then((res) => {
        console.log("response api/new", res);
      });
  };

  return (
    <div>
      <button onClick={handleClick} className="ui button">
        Validate
      </button>
    </div>
  );
}
