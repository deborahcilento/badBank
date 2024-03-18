function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h5 id = "datatitle">All Data in Store</h5>
      {ctx.users.map(user => (
        <div key={user.email} className="card mb-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Balance: {user.balance}</li>
          </ul>
        </div>
      ))}
    </>
  );
}
