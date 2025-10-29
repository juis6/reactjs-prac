function Header(args) {
  const { data } = args;

  const recordsAmount = data.length;

  let totalSum = 0;
  data.forEach((value) => {
    totalSum += value.amount;
  });

  return (
    <header>
      <h1>Expense-Tracker App</h1>
      <p>Total records: {recordsAmount}</p>
      <p>Total sum: {totalSum}$</p>
    </header>
  );
}

export default Header;
