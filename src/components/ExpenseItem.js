import "./ExpenseItem.css";
import ExpenseData from "./ExpenseData";
import Card from "./Card";
import React, { useState } from "react";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

const clickHendler = () => {
	setTitle(" -")
}



	return (
		<Card className="expense-item">
			<ExpenseData date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.price}zl</div>
			</div>
			<button>Change title</button>
		</Card>
	);
}

export default ExpenseItem;
