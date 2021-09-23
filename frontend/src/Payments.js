import { useEffect, useState } from "react"
import { API_HOST } from './env.json'

const Payments = () => {
  const [payments, setPayments] = useState([])
  useEffect(() => fetchPayments(), [])

  const fetchPayments = () => {
    console.log('FetchPayments')
    var url = `${API_HOST}/paymentsjson`

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
      .then(res => setPayments(res))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    var url = `${API_HOST}/addpaymentjson`

    fetch(url, {
      method: 'POST',
      body: data,
    }).then(() => fetchPayments())
  }

  return (
    <>
      <h2>Payments</h2>

      <table>
        <tr>
          <td>Name</td>
        </tr>
        {payments.map(payment => (
          <tr>
            <td>{payment.name}</td>
          </tr>
        ))}
      </table>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Payment method</label>
          <input id="name" name="name" type="text" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  );

}
export default Payments;
