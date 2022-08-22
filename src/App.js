import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import expenses from "./components/Expenses/Expenses";

const App = () => {
  const expense = [
    {
      id: 1,
      title: "Car Insurence",
      price: 294.47,
      date: new Date(2021, 2, 12),
    },
    {
      id: 2,
      title: "Car Insurence",
      price: 294.47,
      date: new Date(2021, 2, 12),
    },
    {
      id: 3,
      title: "Car Insurence",
      price: 294.47,
      date: new Date(2021, 2, 12),
    },
    {
      id: 4,
      title: "Car Insurence",
      price: 294.47,
      date: new Date(2021, 2, 12),
    },
    {
      id: 5,
      title: "Car Insurence",
      price: 294.47,
      date: new Date(2021, 2, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
};

export default App;
