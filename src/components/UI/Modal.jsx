import { Fragment } from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const parentElement = document.getElementById("overlays");

const Modal = (props) => {
  const printLog = () => {
    console.log("Clicked!");
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        parentElement
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        parentElement
      )}
    </Fragment>
  );
};

export default Modal;
