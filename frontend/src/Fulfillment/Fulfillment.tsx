import data from './data';

function Fulfillment() {
  return (
    <div className="content content-margined">
      <h2>Fulfillment</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          {data.orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td className={order.status === 'Unshipped' ? 'unshipped' : ''}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fulfillment;