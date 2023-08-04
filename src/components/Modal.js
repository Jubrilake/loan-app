import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCreateLoan } from "../store"


const Modal = ({message}) => {
    const dispatch = useDispatch()
    setTimeout(()=>{
     dispatch(clearCreateLoan())

    },2000
    )

  return (
    <div class="modal">
        <div class="modal-container">
        <p>{message}</p></div>
        </div>
        
      
  )
}

export default Modal