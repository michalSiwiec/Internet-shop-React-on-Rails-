import React, {useState, useEffect} from 'react'

const Statistics = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_sum_orders_associated_with_month", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then(info => console.log(info))
    }, [])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_relation_between_opinion_mark", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then(info => console.log(info))
    }, [])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_general_information", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then(info => console.log(info))
    }, [])

    return (
        <div className="statistics-container">
            <h2>Statistic digrams</h2>
        </div>
    )
}

export default Statistics
