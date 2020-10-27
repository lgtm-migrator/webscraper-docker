import React from "react";
import axios from "axios";

export default function NewpaperButton(props) {
  return (
    <div>
      <button className={props.item.class}>
        {props.item.name}
      </button>
    </div>
  );
}