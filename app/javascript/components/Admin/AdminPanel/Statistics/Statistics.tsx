import React from 'react'

import Header from './Header/Header'
import WholeMonthPriceDiagram from './WholeMonthPriceDiagram/WholeMonthPriceDiagram'
import TheMostOftenPurchasedProducts from './TheMostOftenPurchasedProducts/TheMostOftenPurchasedProducts'
import OpinionsDiagram from './OpinionsDiagram/OpinionsDiagram'
import MainInfo from './MainInfo/MainInfo'

const Statistics = () => {
    return (
        <div className="statistics-container">         
            <Header />
            <OpinionsDiagram />
            <WholeMonthPriceDiagram />
            <TheMostOftenPurchasedProducts />
            <MainInfo />
        </div>
    )
    

}

export default Statistics
