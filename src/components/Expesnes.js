import ExpenseItem from "./ExpenseItem";
import "./ExpenseData.css";
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesList from "./NewExpense/ExpensesList";
import ExpenseChart from "./NewExpense/ExpenseChart";

function Expenses(props) {
	const [filterState, setFilterstate] = useState("2020");
	// const expenses = props.expenses;
	const dateHendler = (date) => {
		setFilterstate(date);
		console.log(date);
	};

	const filtredData = props.expenses.filter((dejta) => {
		return dejta.date.getFullYear().toString() === filterState;
	});

	console.log(filtredData);
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filterState}
					onFilterDate={dateHendler}></ExpensesFilter>
<ExpenseChart expenses={filtredData}></ExpenseChart>
				<ExpensesList filtredData={filtredData} />
			</Card>
		</div>
	);
}

export default Expenses;
