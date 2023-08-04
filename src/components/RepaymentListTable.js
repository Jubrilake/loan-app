import React from 'react'

const RepaymentListTable = ({schedule}) => {

    let content = schedule.map(data => {
            return (
              <tr key={data.ID}>
              <td>${data.LOAN_BALANCE}</td>
              <td>{data.MONTH_COUNT}</td> 
              <td>${data.EXPECTED_REPAYMENT_AMOUNT}</td>
              <td>${data.INTEREST}</td>
              <td>${data.TOTAL_REPAYMENT_AMOUNT}</td>
              
            </tr>
            )
        })
        console.log(schedule)
      

  return (
   <section className='loan-list'>
   
     <table>
  <tr>
    <th>Loan Balanace</th>
    <th>Month Count</th>
    <th>Expected Repayment Amount</th>
    <th>Interest</th>
    <th>Total Repayment Amount</th>
  </tr>
  { schedule.length ? content : "no content"}
</table>
    </section>
  )
}

export default RepaymentListTable