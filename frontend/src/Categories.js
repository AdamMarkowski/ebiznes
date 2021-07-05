import { useEffect, useState } from "react"

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => fetchCategories(), [])

  const fetchCategories = () => {
    console.log('FetchCategories')
    var url = "http://localhost:9000/categoriesjson"

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

    var url = 'http://localhost:9000/addcategoryjson'

    fetch(url, {
      method: 'POST',
      body: data,
    }).then(() => fetchCategories())
  }

  return (
    <>
      <h2>Categories</h2>

      <table>
        <tr>
          <td>Name</td>
        </tr>
        {categories.map(category => (
          <tr>
            <td>{category.category_name}</td>
          </tr>
        ))}
      </table>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Category name</label>
          <input id="name" name="name" type="text" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  );

}
export default Categories;
