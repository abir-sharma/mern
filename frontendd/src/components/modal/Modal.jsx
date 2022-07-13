import React from "react";
import "./modal.css";
import { Link } from "react-router-dom";


function Modal({setOpenModal,message,handleDelete}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div>
            <div className="title">
          <h1>{message}</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              
              handleDelete("NO")
              setOpenModal(false)
            }}
            id="cancelBtn"
          >
            No
          </button>
          <Link className="link" to="/">
          <button onClick={()=>{handleDelete("YES")}} >Yes</button>
            </Link>
          
        </div>
        </div>
        {/* {isDeleted?(<div className="title">
          <h1>{message}</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              
              handleDelete("NO")
              setOpenModal(false)
            }}
            id="cancelBtn"
          >
            No
          </button>
          <Link className="link" to="/">
          <button onClick={()=>{handleDelete("YES")}} >Yes</button>
            </Link>
          
        </div>):<div className="title">
          <h1>{message}</h1>
        </div>} */}
        
      </div>
    </div>
  );
}

export default Modal;