import { useEffect, useState } from "react"

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState([])
  useEffect(() => fetchManufacturers(), [])

  const fetchManufacturers = () => {
    console.log('FetchManufacturers')
    var url = "http://localhost:9000/manufacturersjson"

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
      .then(res => setManufacturers(res))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    var url = 'http://localhost:9000/addmanufacturerjson'

    fetch(url, {
      method: 'POST',
      body: data,
    }).then(() => fetchManufacturers())
  }

  return (
    <>
      <h2>Manufacturers</h2>

      <table>
        <tr>
          <td>Name</td>
        </tr>
        {manufacturers.map(manufacturer => (
          <tr>
            <td>{manufacturer.name_manufacturer}</td>
          </tr>
        ))}
      </table>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Manufacturer name</label>
          <input id="name" name="name" type="text" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  );

}
export default Manufacturers;
