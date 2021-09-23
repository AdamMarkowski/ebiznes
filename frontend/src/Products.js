import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([])
  const [createStatus, setCreateStatus] = useState(null);
  useEffect(() => fetchProducts(), [])

  const fetchProducts = () => {
    console.log('FetchProducts')
    var url = "http://localhost:9000/productsjson"

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
      .then(res => setProducts(res))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    var url = 'http://localhost:9000/addproductjson'

    const formData = {
      name: event.target.elements.name.value,
      description: event.target.elements.description.value,
      price: event.target.elements.price.value,
      category: 1,
      manufacturer: 1,
    }

    console.log('formData: ', formData)

    fetch(url,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(function (res) { return res.json(); })
      .then((res) => {
        setCreateStatus(res.status)
        fetchProducts()
      })
  }

  const removeById = (id) => {
    setProducts(
      products.filter(product => product.id_product !== id)
    )
  }

  return (
  <>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Add product
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name"></input>
                </div>

                <div className="form-group">
                  <label for="name" className="form-label">Description</label>
                  <input type="text" className="form-control" id="description"></input>
                </div>

                <div className="form-group">
                  <label for="name" className="form-label">Price</label>
                  <input type="number" className="form-control" id="price"></input>
                </div>

                {createStatus === "ok" && <div class="alert alert-success mt-2" role="alert">
                  Space created successfully
                </div>}

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id_product}>
                <th scope="row">{product.id_product}</th>
                <td>{product.product_name}</td>
                <td>{product.product_description}</td>
                <td>{product.product_price}</td>
                <td><i className="bi-trash" onClick={() => removeById(product.id_product)}></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    // <div className="container px-4 px-lg-5 mt-5">
    //   <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    //     {products.map(product => (
    //       <div className="col mb-5">
    //         <div className="card h-100">
    //           <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    //           <div className="card-body p-4">
    //             <div className="text-center">
    //               <h5 className="fw-bolder">{product.product_name}</h5>
    //               <p>{product.product_description}</p>
    //               ${product.product_price}
    //             </div>
    //           </div>
    //           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
    //             <div className="text-center">
    //               <Link className="btn btn-outline-dark mt-auto" to={`/product/${product.id_product}`}>View</Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default Home;
