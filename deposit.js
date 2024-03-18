function Deposit(){
  const ctx = React.useContext(UserContext);
  const user = ctx.users[ctx.users.length - 1];
  const [deposit, setDeposit] = React.useState(0);
  const [balance, setBalance] = React.useState(user.balance); 

  const handleDeposit = e => {
    e.preventDefault();
    let newBalance = user.balance + deposit;
    ctx.users[ctx.users.length - 1].balance = newBalance;
    setBalance(newBalance); 
    alert(`$${deposit} has been successfully deposited!`);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Balance</h5>
        <p className="card-text">Balance for {user.name}: ${balance}</p>
        <h5 className="card-title">Deposit</h5>
        <form onSubmit={handleDeposit}>
          <div className="form-group">
            <label htmlFor="deposit">Amount:</label>
            <input type="number" id="deposit" name="deposit" min="0" onChange={e => setDeposit(Number(e.target.value))} className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary" disabled={deposit <= 0}>Submit</button>
        </form>
      </div>
    </div>
  )
}

