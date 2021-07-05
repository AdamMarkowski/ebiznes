import { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => fetchUsers(), [])

  const fetchUsers = () => {
    console.log('FetchUsers')
    var url = "http://localhost:9000/usersjson"

    fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setUsers(res))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    var url = 'http://localhost:9000/adduserjson'

    fetch(url, {
      method: 'POST',
      body: data,
    }).then(() => fetchUsers())
  }

  return (
    <>
      <h2>Users</h2>

      <table>
        <tr>
          <td>id</td>
          <td>email</td>
          <td>admin</td>
        </tr>
        {users.map(user => (
          <tr>
            <td>{user.id_user}</td>
            <td>{user.email}</td>
            <td>{user.is_admin ? 'True' : 'False'}</td>
          </tr>
        ))}
      </table>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input id="email" name="email" type="text" />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Password</label>
          <input id="password" name="password" type="text" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Reset question</label>
          <input id="reset_question" name="reset_question" type="text" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Reset answear</label>
          <input id="reset_answer" name="reset_answer" type="text" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
export default Users;
