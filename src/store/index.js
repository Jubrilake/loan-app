import { configureStore } from "@reduxjs/toolkit"
import { loanReducer } from "./slice/loanSlice"
import {
    requestLoan,
    getAllLoan,
    getLoanRepaymentSchedule,clearCreateLoan
} from "./slice/loanSlice"



const store = configureStore({
    reducer:{
        loan: loanReducer
    }
    
})


export {store,requestLoan,getAllLoan,getLoanRepaymentSchedule,clearCreateLoan}




