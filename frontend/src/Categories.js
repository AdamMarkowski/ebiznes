import { useEffect, useState } from "react"
import { API_HOST } from './env.json'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => fetchCategories(), [])

  const fetchCategories = () => {
    console.log('FetchCategories')
    var url = `${API_HOST}/categoriesjson`

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
      .then(res => setCategories(res))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    var url = `${API_HOST}/addcategoryjson`

    fetch(url, {
      method: 'POST',
      body: data,
    }).then(() => fetchCategories())
  }

  return (
    <>
      <h2>Categories</h2>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Add category
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Category name</label>
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
        {categories.map(category => (
          <tr>
            <td>{category.id_category}</td>
            <td>{category.category_name}</td>
          </tr>
        ))}
      </table>
    </>
  );

}
export default Categories;
