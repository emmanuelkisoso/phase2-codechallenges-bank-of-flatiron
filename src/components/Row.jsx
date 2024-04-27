function Row({dealings}) {
    const rows=dealings.map( (dealing, index)=>{
        return(
            <tr key={index+1}>
            <td>{dealing.date}</td>
            <td>{dealing.description}</td>
            <td>{dealing.category}</td>
            <td>{dealing.amount}</td>
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