import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getAllLoan } from '../store';
import axios from 'axios';
import { useLocation } from 'react-router';
const Nav = () => {
 
 
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()

  const handleClick = async () => {
    const formData = new FormData()
    formData.append("action","get_all_loan_request")
    const config = {
      headers:{
       "Content-Type": "multipart/form-data"
     }  
   }
    setLoading(true)
    const {data} = await axios.post("https://okigwecreations.online/api/",formData,config)
    dispatch(getAllLoan(data))
    setLoading(false)
      
  }

  return (
    <nav id="nav">
      {location.pathname === "/" && ( <button onClick={handleClick}>Get all loans</button>)}
     

    </nav>
  )
}

export default Nav