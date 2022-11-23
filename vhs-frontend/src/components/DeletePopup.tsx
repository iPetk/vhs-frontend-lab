import React from "react";
import { MouseEventHandler } from "react";
import "./popup.css";

type Props = {
    text: string,
    closePopup: MouseEventHandler,
    doPopupAction?: MouseEventHandler
  }

export const Popup = ({ text, closePopup,  doPopupAction}: Props) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <h1>{text}</h1>
      <button onClick={closePopup}>Close X</button>
      {doPopupAction && <button onClick={doPopupAction}>Delete</button>}
     </div>
    </div>
  );
};