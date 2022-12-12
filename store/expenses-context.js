import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "New TV",
    amount: 799.49,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A new desk (wooden)",
    amount: 450,
    date: new Date("2022-01-01"),
  },
  {
    id: "e3",
    description: "Car Insurance",
    amount: 250,
    date: new Date("2022-02-01"),
  },
  {
    id: "e4",
    description: "anu",
    amount: 31,
    date: new Date("2022-02-04"),
  },
  {
    id: "e5",
    description: "New TV",
    amount: 799.49,
    date: new Date("2021-12-19"),
  },
  {
    id: "e6",
    description: "A new desk (wooden)",
    amount: 450,
    date: new Date("2022-12-08"),
  },
  {
    id: "e7",
    description: "Car Insurance",
    amount: 250,
    date: new Date("2022-12-09"),
  },
  {
    id: "e8",
    description: "anu",
    amount: 31,
    date: new Date("2022-12-10"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const idnya = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: idnya }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider;
