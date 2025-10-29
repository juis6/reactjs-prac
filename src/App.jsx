import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";

import { useState } from "react";

function App() {
  const [nextId, setNextId] = useState(1);

  const [data, setData] = useState([
    {
      id: nextId,
      date: Date.now(),
      name: "Add your first expense",
      amount: 0,
      category: "None",
    },
  ]);

  setNextId(nextId + 1);

  function handleAddData(addedData) {
    const newData = [...data, addedData];
    setData(newData);
    setNextId(nextId + 1);
  }

  return (
    <>
      <Header data={data}></Header>

      <ExpenseList data={data}></ExpenseList>

      <ExpenseInput
        nextId={nextId}
        handleAddData={handleAddData}
      ></ExpenseInput>
    </>
  );
}

export default App;
