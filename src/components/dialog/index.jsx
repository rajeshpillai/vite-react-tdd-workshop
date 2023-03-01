import React from "react";
import "./dialog.css";

const Dialog = ({ children, onConfirmation, onCancellation }) => {
  return (
    <div role="dialog" className="confirmation">
      <h1>Dialog</h1>
      <div>{children}</div>
      <div className="confirmation-action">
        <button onClick={onConfirmation}>OK</button>
        <button onClick={onCancellation}>Cancel</button>
      </div>
    </div>
  );
};

export { Dialog };
