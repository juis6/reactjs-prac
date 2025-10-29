import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";

import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: Date.now(),
      name: "Add your first expense",
      amount: 100,
      category: "None",
    },
  ]);

  return (
    <>
      <Header data={data}></Header>

      <ExpenseList data={data}></ExpenseList>

      <ExpenseInput></ExpenseInput>
    </>
  );
}

export default App;
