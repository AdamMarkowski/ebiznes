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

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Add user
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Admin?</th>
          </tr>
        </thead>
        {users.map(user => (
          <tr>
            <td>{user.id_user}</td>
            <td>{user.email}</td>
            <td>{user.is_admin ? 'True' : 'False'}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
export default Users;
