import React from 'react'

import {Link} from 'react-router-dom'

import '../../../../assets/stylesheets/ShoppingOptions.scss'

const ShoppingOption = () => {
    return (
        <div className="shopping-options-container">
            <div className="header-container">
                <h2><span className="header">Kaufland</span> więcej kupujesz - więcej zyskujesz!</h2>
            </div>
            <div className="sing-in-container">
                <div className="ornament">
                    <p>Logowanie</p>
                </div>

                <div className="fileds-container">
                    <div>
                        <input type="text" placeholder="E-mail"/>
                    </div>

                    <div>
                        <input type="text" placeholder="Hasło"/>
                    </div>

                    <div>
                        <span className="prompt">Nie pamiętam hasła</span>
                    </div>

                    <div>
                        <Link to=""><button className="log-in-btn">Zaloguj się</button></Link>
                    </div>
                </div>
            </div>

            <div className="rejestration-container">
                <div className="ornament">
                    <p>Rejestracja</p>
                </div>

                <div className="fileds-container">
                    <div>
                        <Link to=""><button className="rejestration-btn">Zarejestruj się</button></Link>
                    </div>
                </div>
            </div>

            <div className="shopping-without-rejestration-container">
                <div className="ornament">
                    <p>Kup bez rejestracji</p>
                </div>

                <div className="fileds-container">
                    <div>
                        <p className="text">
                            Nie masz konta i nie chcesz zakładać?
                            Skorzystaj z opcji zakupów bez rejestracji!
                        </p>
                    </div>

                    <div>
                        <Link to="/home/OrderForm"><button className="shopping-without-rejestration-btn">Kup bez rejestracji</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingOption
