import React, {useState, useEffect} from 'react'

const Statistics = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("/api/v1/diagrams", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then(info => setOrders(info))
    }, [])

    console.log(orders)

    return (
        <div className="statistics-container">
            <h2>Statistic digrams</h2>
        </div>
    )
}

export default Statistics
