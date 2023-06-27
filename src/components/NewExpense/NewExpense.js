import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./Expense";



const NewExpense = (props) => {

const [show,setShow]= useState(false);

	const saveExpenseDataHandler = (enteredexpenseData) => {
		const expenseData = {
			...enteredexpenseData,
			id: Math.random().toString(),
		};
        props.onAddExpense(expenseData); 

		console.log("Data")
	};

const swichexpense = ()=>{
setShow(true);
console.log("KILK")
};
const swichexpenseToFalse = ()=>{
setShow(false);
console.log("KILK")
};
const op1 = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} swich={swichexpenseToFalse}/>;
const op2 = <button onClick={swichexpense}>Add Expense</button>;

	return (
		<div>
			<form className="new-expense">
				{!show? op2:op1}
		
			</form>
		</div>
	);
};

export default NewExpense;
