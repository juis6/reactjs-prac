import ExpenseCard from "./ExpenseCard";

function ExpenseList(args) {
  const { data } = args;

  return (
    <div>
      <h2>Your Expenses</h2>
      {data.map((value) => {
        return <ExpenseCard key={value.id} item={value}></ExpenseCard>;
      })}
    </div>
  );
}

export default ExpenseList;
