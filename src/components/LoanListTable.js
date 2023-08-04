import {useState} from 'react'
import { Link } from "react-router-dom"
import {useSelector } from 'react-redux';
import Loader from './Loader';




const LoanListTable = () => {
  const [loading,setLoading] = useState(false)

    const {getAllLoans} = useSelector(state => state.loan)
    
    let loans = []
    
    if(getAllLoans && getAllLoans.result && getAllLoans.data.length){
         loans = getAllLoans.data.map(loan => {
            return  <tr key={loan.ID}>
            <td>{loan.TRANSACTION_ID}</td>
            <td>{loan.FULL_NAME}</td>
            <td>{loan.LOAN_AMOUNT}</td>
            <td>{loan.REPAYMENT_DURATION} Months</td>
            <td>{loan.CREATED_TIME}</td>
            <td><Link className="btn-primary"  to={`/transaction/${loan.TRANSACTION_ID}`}>Check Status</Link></td>
          </tr>
        })
    }


    
  return (
    <section className='loan-list'>
    {loading && <Loader />}
     <table>
  <tr>
    <th>Transaction ID</th>
    <th>Full Name</th>
    <th>loan Amount</th>
    <th>Repayment Duration</th>
    <th>Created Time</th>
  </tr>
 
  {loans}
  
  
 
</table>

    </ section>
   

  )
}

export default LoanListTable