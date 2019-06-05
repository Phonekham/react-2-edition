import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    className="modal"
    isOpen={!!props.selectedOption}
    contentLabel="Selected option"
  >
    <h3 className="modal__title">Select option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearSelectedOption}>
      Ok
    </button>
  </Modal>
);

export default OptionModal;
