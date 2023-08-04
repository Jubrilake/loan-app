import {useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import { getLoanRepaymentSchedule } from '../store';
import {useSelector,useDispatch } from 'react-redux';
import Loader from './Loader';
import axios from 'axios';
import RepaymentListTable from './RepaymentListTable'

const Transaction = () => {
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useParams()


  const fetchList = async () => {
    const formData = new FormData()
    formData.append("action","get_repayment_schedule")
    formData.append("transaction_id", navigate.id)
    const config = {
      headers:{
       "Content-Type": "multipart/form-data"
     }  
   }
    setLoading(true)
     const {data} = await axios.post("https://okigwecreations.online/api/",formData,config)
    dispatch(getLoanRepaymentSchedule(data))
    setLoading(false)
  }
   useEffect(() => {
    fetchList()
   
   }, [navigate])

  
 
  const {getLoanRepaymentSchedule: getLoan} = useSelector(state => state.loan)
  if(loading && !getLoan){
    return <Loader />
  }
  if(!loading && getLoan){
    if(getLoan.code === 105){
      return (
        <section className='repayment-section'>
        <div className="container">
        <Link to="/" >back</Link>
    
          <div className='repayment-content'>
            <h1>{getLoan.message && getLoan.message}</h1>
            <ul>
            <li><b>Transaction ID:</b> {getLoan.TRANSACTION_ID && getLoan.TRANSACTION_ID}</li>
              <li><b>Fullname:</b> {getLoan.FULL_NAME && getLoan.FULL_NAME}</li>
              <li><b>Loan Amount:</b> ${getLoan.LOAN_AMOUNT && getLoan.LOAN_AMOUNT}</li>
              <li><b>Repayment Duration:</b> {getLoan.REPAYMENT_DURATION && getLoan.REPAYMENT_DURATION} Months</li>
              <li><b>Date:</b> {getLoan.DATE && getLoan.DATE}</li>
            </ul>
           
           
            </div>
            <RepaymentListTable schedule={getLoan.data && getLoan.data.length ? getLoan.data : [] } />
        
        </div>
        </section>
       
      
      )
    }else{
      return (
        <div className="repayment-section">
 <div className="container">
           <Link to="/" >back</Link>
           <h2 style={{margin:"20px 0px"}}>{getLoan.message}</h2>
        </div>
        </div>
       

      )
    }
   
  }

}

export default Transaction