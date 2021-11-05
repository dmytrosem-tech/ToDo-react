import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export default function Modal({ children, toggleModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  const handleEsc = (e) => {
    let condition = e.code === "Escape";
    if (condition) {
      toggleModal();
    }
  };

  const handleClose = (e) => {
    if (e.currentTarget === e.target) toggleModal();
  };

  const { modal__backDrop, modal__content } = styles;
  return createPortal(
    <div className={modal__backDrop} onClick={handleClose}>
      <div className={modal__content}>{children}</div>
    </div>,

    document.getElementById("modalRoot")
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  toggleModal: PropTypes.func,
};
