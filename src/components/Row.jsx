function Row({transactions}) {
    const rows=transactions.map( (transaction, index)=>{
        return(
            <tr>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
        </tr>
        )
    })
    return(
        <>
            {rows}
        </>
    )
}

export default Row