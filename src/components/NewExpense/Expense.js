import React, { useState } from "react";
import "./Expense.css";

const ExpenseForm = (props) => {
	const [dtitle, setTitle] = useState("");
	const [damount, setAmount] = useState("");
	const [ddata, setData] = useState("");

	const titleChangeHandler = (e) => {
		setTitle(e.target.value);
	};
	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};
	const dataChangeHandler = (e) => {
		setData(e.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: dtitle,
			amount: +damount,
			date: new Date(ddata),
		};
		console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setTitle("");
		setAmount("");
		setData("");
		console.log("LOG LOG  LOG");
	};

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={dtitle} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={damount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Data</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={ddata}
						onChange={dataChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button"
				onClick={props.swich}>Cancel</button>
				<button onClick={submitHandler} type="submit">
					Add Expense
				</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
