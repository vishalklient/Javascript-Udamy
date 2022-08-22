import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const expenses = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].price}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].price}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].price}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].price}
        date={props.items[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].price}
        date={props.items[4].date}
      ></ExpenseItem>
    </Card>
  );
};

export default expenses;
