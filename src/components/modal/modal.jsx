const Modal = (props) => {
  return (
    <div>
      <div className="overlay"></div>
      {props.show && (
        <div className="modal">
          <h1>{props.modalMessage}</h1>
          <button onClick={props.handleClick}>okay!</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
