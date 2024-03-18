function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label + ' cannot be empty');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (label === 'password' && field.length < 8) {
      setStatus('Error: Password should be at least 8 characters long');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate(e){
    e.preventDefault();
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setStatus('Account successfully created!');
    setTimeout(() => setStatus(''),3000);
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Create Account</h5>
        <p className="card-text" style={{color: status.startsWith('Error') ? 'red' : 'black'}}>{status}</p>
        {show ? (  
          <>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} required />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleCreate} disabled={!name && !email && !password}>Create Account</button>
            </form>
          </>
        ):(
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-primary" onClick={clearForm}>Add another account</button>
          </>
        )}
      </div>
    </div>
  )
}
