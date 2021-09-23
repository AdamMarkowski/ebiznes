import { useEffect, useState } from "react"
import {
  useParams
} from "react-router-dom";
import { API_HOST } from './env.json'

const Product = () => {
  let { id } = useParams();
  console.log('id: ', id)
  const [product, setProduct] = useState(undefined)

  useEffect(() => fetchProduct(), [id])
  useEffect(() => console.log('product: ', product), [product])

  const fetchProduct = () => {
    console.log('FetchProduct')
    var url = `${API_HOST}/productsjson`

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
      .then((products) => {
        setProduct(
          products.filter(product => parseInt(product.id_product) === parseInt(id))[0]
        )
        console.log('product: ', product)
      })
  }

  return(
    <>
      <h1>Product</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">id_product</th>
            <td>{product && product.id_product}</td>
          </tr>
          <tr>
            <th scope="row">product_name</th>
            <td>{product && product.product_name}</td>
          </tr>
          <tr>
            <th scope="row">product_description</th>
            <td>{product && product.product_description}</td>
          </tr>
          <tr>
            <th scope="row">product_price</th>
            <td>{product && product.product_price}</td>
          </tr>
          <tr>
            <th scope="row">category</th>
            <td>{product && product.category}</td>
          </tr>
          <tr>
            <th scope="row">manufacturer</th>
            <td>{product && product.manufacturer}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Product
