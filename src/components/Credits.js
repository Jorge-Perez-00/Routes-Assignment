import { Link } from 'react-router-dom';


const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            return (
                <tr>
                    <td>{credit.date.slice(0, 10)}</td>
                    <td>{credit.description}</td>
                    <td>{credit.amount}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <h1>Credits</h1>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                {creditsView()}
            </table>
            <form onSubmit={props.addCredit}>
                <input type="text" name="description" />
                <input type="number" step="any" name="amount" />
                <button type="submit">Add Credit</button>
            </form>
            <Link class="link" to="/">Home</Link>

        </div>
    )
}

export default Credits;