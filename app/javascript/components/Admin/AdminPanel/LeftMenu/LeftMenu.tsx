import React, {FC} from 'react'

import LeftMenuOption from './LeftMenuOption/LeftMenuOption'
import Header from './Header/Header'

interface Props{
    informationParts: {
        ordersDiagram: any,
        ordersList: any,
        productsList: any,
        clientsList: any,
        statisticDiagrams: any,
        complaintsList: any,
        opinionsList: any
    }
}

const LeftMenu:FC<Props> = ({informationParts}) => {
    
    const moveToElement = (element:any) => {
        if(element)
            element.current.scrollIntoView({ behavior: 'smooth'})
    }
    
    return (
        <div className="left-menu-container">
            <Header />

            <div className="menu-options-container">
                <ul>
                    <LeftMenuOption moveToElement={moveToElement} element={informationParts.ordersDiagram} value="Zamówienia"/>
                    <LeftMenuOption moveToElement={moveToElement} element={informationParts.productsList} value="Produkty"/>
                    <LeftMenuOption moveToElement={moveToElement} element={informationParts.clientsList} value="Klienci"/>
                    <LeftMenuOption moveToElement={moveToElement} element={informationParts.statisticDiagrams} value="Statystyki"/>
                    <LeftMenuOption moveToElement={moveToElement} element={informationParts.complaintsList} value="Reklamacja"/>
                    <LeftMenuOption moveToElement={moveToElement} element={informationParts.opinionsList} value="Opinie"/>
                </ul>
            </div>
        </div>
    )
}

export default LeftMenu
