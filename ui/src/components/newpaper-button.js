import React, { useContext } from "react";
import { Context } from "../Store";

export default function NewpaperButton(props) {
  const [state, dispatch] = useContext(Context);
  const updateArray = (id) => {
    let tempStateUrls = state.urls;
    if (tempStateUrls[id].class === "newpaper-button") {
      tempStateUrls[id].class = "newpaper-button-disabled";
    } else {
      tempStateUrls[id].class = "newpaper-button";
    }
    dispatch({ type: "TEST", payload: tempStateUrls });
    console.log(state, "state global");
    console.log("ACTION_TEST ID", id);
  };
  return (
    <div>
      <button
        onClick={() => updateArray(props.item.id)}
        className={props.item.class}
      >
        {props.item.name}
      </button>
    </div>
  );
}
