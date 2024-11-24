
import './App.css'

function App() {
  const handleAddUser = (e) => {
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const email = form.email.value;
     const user = {name, email};
     console.log(user);
  }

  return (
    <>

      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br /><br />
        <input type="submit" value={"Add User"} />
        <br />
      </form>

    </>
  )
}

export default App