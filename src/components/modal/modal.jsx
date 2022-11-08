const Modal = (props) => {
  return (
    <div>
      {props.show && <><h1>{props.message}</h1>
      <button onClick={props.handleClick}>okay!</button></>}
    </div>
  );
};

export default Modal;

