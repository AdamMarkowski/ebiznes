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

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Add manufacturer
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Manufacturer name</label>
                <input id="name" name="name" type="text" />
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
            <th scope="col">Name</th>
          </tr>
        </thead>
        {manufacturers.map(manufacturer => (
          <tr>
            <td>{manufacturer.id_manufacturer}</td>
            <td>{manufacturer.name_manufacturer}</td>
          </tr>
        ))}
      </table>
    </>
  );

}
export default Manufacturers;
