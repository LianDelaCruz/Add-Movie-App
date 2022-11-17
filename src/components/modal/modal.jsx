import "./_modal.css";
//the modal overlay doesnt work

const Modal = (props) => {
  return (
    <>
      
      {props.show && (
        <>
        <div className="overlay"></div>
        <div className="modal">
          <h1>{props.modalMessage}</h1>
          <button className="modal-btn" onClick={props.handleClick}>
            okay!
          </button>
        </div></>
      )}
    </>
  );
};

export default Modal;
