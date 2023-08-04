import {createSlice } from "@reduxjs/toolkit";



const loanSlice = createSlice({
    name:"loan",
    initialState : {
        createLoan: null,
        getAllLoans: null,
        getLoanRepaymentSchedule:null
    },
    reducers:{
        requestLoan(state,action){
            return {
                ...state,
                createLoan: action.payload
            }
            },
            clearCreateLoan(state, action){
                return {
                    ...state,
                    createLoan: null
                }
            },
            getAllLoan(state,action){
                return{
                    ...state,
                    getAllLoans: action.payload
                }
            },
            getLoanRepaymentSchedule(state,action){
                return {
                    ...state,
                    getLoanRepaymentSchedule: action.payload


                }
            }
        
    }


    
})

export const loanReducer = loanSlice.reducer
export const {requestLoan, clearCreateLoan,getAllLoan,getLoanRepaymentSchedule} = loanSlice.actions