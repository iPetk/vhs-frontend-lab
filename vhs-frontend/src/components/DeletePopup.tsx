import { MouseEventHandler } from 'react';

import './popup.css';

type Props = {
  text: string;
  closePopup: MouseEventHandler;
  doPopupAction?: MouseEventHandler;
  popupButtonText?: string;
};

export const Popup = ({ text, closePopup, doPopupAction, popupButtonText }: Props) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1>{text}</h1>
        <button onClick={closePopup}>Close</button>
        {doPopupAction && <button onClick={doPopupAction}>{popupButtonText}</button>}
      </div>
    </div>
  );
};
