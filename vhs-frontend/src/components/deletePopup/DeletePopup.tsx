import './deletePopup.css';

type Props = {
  text: string;
  closePopup: () => void;
  doPopupAction?: () => void;
  popupButtonText?: string;
};

export const Popup = ({ text, closePopup, doPopupAction, popupButtonText }: Props) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <button className="close" onClick={closePopup}>
          X
        </button>
        <h1>{text}</h1>
        {doPopupAction && (
          <button className="delete" onClick={doPopupAction}>
            {popupButtonText}
          </button>
        )}
      </div>
    </div>
  );
};
