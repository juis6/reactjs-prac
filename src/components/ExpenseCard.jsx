function ExpenseCard(args) {
  const { item, handleDeleteData } = args;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Sum: {item.amount}</p>
      <p>Category: {item.category}</p>
      
      <button
        onClick={() => {
          handleDeleteData(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ExpenseCard;
