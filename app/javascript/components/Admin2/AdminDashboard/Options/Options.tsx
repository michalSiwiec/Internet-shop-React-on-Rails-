import React from 'react'

import {Link} from 'react-router-dom'

const Options = () => {
    return (
        <div className="options-container">
            <div className="option-container bigger-container">
                <Link to="/admin/Orders"><h2>Zamówienia</h2></Link>
            </div>

            <div className="option-container bigger-container">    
                <Link to="/admin/Statistics"><h2>Statystyki</h2></Link>
            </div>

            <div className="option-container">
                <Link to="/admin/Clients"><h2>Klienci</h2></Link>
            </div>

            <div className="option-container">
                <Link to="/admin/Products"><h2>Produkty</h2></Link>
            </div>

            <div className="option-container">
                <Link to="/admin/Opinions"><h2>Opinie</h2></Link>
            </div>
        </div>
    )
}

export default Options
