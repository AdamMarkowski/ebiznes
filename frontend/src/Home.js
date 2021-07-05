import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([])
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

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {products.map(product => (
          <div className="col mb-5">
            <div className="card h-100">
              {/* <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /> */}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{product.product_name}</h5>
                  <p>{product.product_description}</p>
                  ${product.product_price}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link className="btn btn-outline-dark mt-auto" to={`/product/${product.id_product}`}>View</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
