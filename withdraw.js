function Withdraw(){
  const ctx = React.useContext(UserContext);
  const user = ctx.users[ctx.users.length - 1];
  const [withdraw, setWithdraw] = React.useState(0);
  const [balance, setBalance] = React.useState(user.balance); 

  const handleWithdraw = e => {
    e.preventDefault();
    if (user.balance < withdraw) {
      alert('Insufficient balance');
      return;
    }
    let newBalance = user.balance - withdraw;
    ctx.users[ctx.users.length - 1].balance = newBalance;
    setBalance(newBalance);
    alert(`$${withdraw} has been successfully withdrawn!`);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Balance</h5>
        <p className="card-text">Balance for {user.name}: ${balance}</p>
        <h5 className="card-title">Withdraw</h5>
        <form onSubmit={handleWithdraw}>
          <div className="form-group">
            <label htmlFor="withdraw">Amount:</label>
            <input type="number" id="withdraw" name="withdraw" min="0" onChange={e => setWithdraw(Number(e.target.value))} className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary" disabled={withdraw <= 0}>Submit</button>
        </form>
      </div>
    </div>
  )
}
