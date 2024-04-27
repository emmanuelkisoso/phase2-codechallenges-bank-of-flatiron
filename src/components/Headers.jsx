import Row from "./Row"

function Headers() {
    const transactions= [
        {
            date: "12/02/2024",
            description: "Paycheck from Hilton Hotel",
            category: "Income",
            amount: "3000000"
        },
        {
            date: "23/03/2024",
            description: "Television Set",
            category: "Luxury",
            amount: "-70000"
        },
        {
            date: "3/05/2024",
            description: "Movie",
            category: "Entertainment",
            amount: "-1000"
        },
        {
            date: "15/08/2024",
            description: "Pizza",
            category: "Food",
            amount: "-1000"
        },
        {
            date: "12/02/2024",
            description: "Burberry",
            category: "Fashion",
            amount: "-250000"
        }
    ]




    return (
    <>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <Row transactions={transactions}/>
        </tbody>
    </>
    )
}

export default Headers