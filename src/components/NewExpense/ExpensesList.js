import ExpenseItem from "../ExpenseItem";
import React from "react";

import "./ExpensesList.css";

const ExpensesList = (props) => {

	

    if (props.filtredData.length === 0) {
        console.log("NEW LOG ")
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
      }

	return <ul className="expenses-list">
        {props.filtredData.map((a) => (
			<ExpenseItem
				key={a.id}
				title={a.title}
				price={a.amount}
				date={a.date}
			/>))}
    </ul>;
};
export default ExpensesList;
