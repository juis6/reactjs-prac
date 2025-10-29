function ExpenseCard(args) {
  const { item } = args;

  return (
    <div>
      <h3>{item["name"]}</h3>
      <p>{item["amount"]}</p>
      <p>{item["category"]}</p>
    </div>
  );
}

export default ExpenseCard;
