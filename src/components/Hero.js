import {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { requestLoan } from '../store';
import axios from 'axios'
import Modal from '../components/Modal'
import Loader from './Loader';



const Hero = () => {
  const {createLoan} = useSelector((state) => state.loan)
  
 
 const dispatch = useDispatch()
  const [loan,setLoan] = useState({
    full_name:"",
    loan_amount:0,
    repayment_duration: 0
  })
  const [loading, setLoading] = useState(false)



  const handleChange = (e) =>{
    setLoan((prev) => {
    return {
      ...prev,
      [e.target.name] : e.target.value
    }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!loan.full_name){

    }
    const formData = new FormData();
    formData.append("action","request_for_loan")
    formData.append("full_ name",loan.full_name)
    formData.append("loan_amount",loan.loan_amount)
    formData.append(" repayment_duration",loan.repayment_duration)
  const config = {
     headers:{
      "Content-Type": "multipart/form-data"
    }  
  }
   setLoading(true)
    const {data} = await axios.post("https://okigwecreations.online/api/",formData,config)
    dispatch(requestLoan(data))
    setLoan({
      full_name:"",
      loan_amount:0,
      repayment_duration: 0
    })
    setLoading(false)
   
  
  }
  

  return (
    <>
    {loading && <Loader />}
    {createLoan && createLoan.result && (<Modal message={createLoan.message} />)}
    <header id="header">
      <div className="container header-grid">
      <div className="right">
        <h1>Looking for a same day loan?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora a animi ullam sunt voluptatem quia nisi iste hic doloribus. Repellendus.</p>
      </div>
      <div className='left'>
        {/* form */}
      <form onSubmit={handleSubmit} className='form'>
        <div className="form-group">
          <input onChange={handleChange} type="text" name="full_name" placeholder='Fullname' required  value={loan.full_name}/>
        </div>
        <div className="form-group">
          <input  onChange={handleChange} type="number" name="loan_amount"  placeholder='loan amount' required value={loan.loan_amount}/>
        </div>
        <div className="form-group">
          <input onChange={handleChange} type="number" name="repayment_duration" placeholder='payment duration' required value={loan.repayment_duration} min="1"   />
        </div>
        <div className="form-group">
          <button type="submit">Apply for a loan now!</button>
        </div>
      </form>
      <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit. Necessitatibus iusto voluptates delectus nobis.</small>
      </div>
        
    
      
      </div>
     


    </header>
    </>
    
  )
}

export default Hero