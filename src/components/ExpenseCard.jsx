function ExpenseCard(args) {
  const { item } = args;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Sum: {item.amount}</p>
      <p>Category: {item.category}</p>
      <button>Delete</button>
    </div>
  );
}

export default ExpenseCard;
