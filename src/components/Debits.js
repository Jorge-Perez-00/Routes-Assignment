import { Link } from 'react-router-dom';

const Debits = (props) => {
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      return (
        <tr>
          <td>{debit.date.slice(0, 10)}</td>
          <td>{debit.description}</td>
          <td>{debit.amount}</td>
        </tr>
      )
    })
  }
  return (
    <div>
      <h1>Debits</h1>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        {debitsView()}
      </table>
      <form onSubmit={props.addDebit}>
        <input type="text" name="description" />
        <input type="number" step="any" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
      <Link class="link" to="/">Home</Link>
    </div>

  )
}
export default Debits;