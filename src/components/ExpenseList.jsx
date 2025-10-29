import ExpenseCard from "./ExpenseCard";

function ExpenseList(args) {
  const { data } = args;

  return (
    <div>
      <h2>Your Expenses</h2>
      {data.forEach((value) => {
        return <ExpenseCard item={value}></ExpenseCard>;
      })}
    </div>
  );
}

export default ExpenseList;
