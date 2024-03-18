function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#" title="Home Page" >Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-light" href="#/CreateAccount/" title="Create a new account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#/deposit/" title="Deposit money into your account">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#/withdraw/" title="Withdraw money from your account">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#/alldata/" title="View all user data">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}
