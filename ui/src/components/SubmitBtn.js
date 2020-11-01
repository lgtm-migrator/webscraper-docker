import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../Store";

export default function SubmitButton() {
  const [state, dispatch] = useContext(Context);
  const handleClick = () => {
    dispatch({ type: "LOADING", payload: true });
    axios
      .post("http://localhost:8080/api/urls", {
        urls: state.urls,
      })
      .then((res) => {
        dispatch({ type: "LOADING", payload: false });
        dispatch({ type: "API", payload: res.data });
        dispatch({ type: "SHOW_BTN_ACTIONS", payload: !state.showBtnActions });
      })
      .catch((error) => {
        if (error) {
          setTimeout(function () {
            dispatch({ type: "ERR_MSG", payload: true });
            dispatch({ type: "LOADING", payload: false });
          }, 5000);
        }
      });
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={
          state.loading
            ? `ui button actions-btn loading`
            : `ui button actions-btn`
        }
      >
        <i className="paper plane icon"></i>
        Submit
      </button>
      {state.errMsg ? (
        <p className="errMsg">
          <i className="ambulance icon" />
          An error occured, please excuse us.
        </p>
      ) : null}
    </div>
  );
}
