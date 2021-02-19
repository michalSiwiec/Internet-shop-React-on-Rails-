import React from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../assets/stylesheets/Admin2/Dashboard/AdminPanel/Options/Options.scss'

const Options = () => {
    return (
        <div className="options-container">
            <div className="option-container bigger-container orders-container">
                <div className="overlay overlay--bottom">
                    <h3>Sledz zamówienia aby być zawsze na bieząco!</h3>
                    <Link to="/admin/Orders"><span>Wejsdz!</span></Link>
                </div>
            </div>


            <div className="option-container bigger-container statistics-container">    
                <div className="overlay overlay--full">
                    <Link to="/admin/Statistics"><span>Wejdz!</span></Link>
                </div>
            </div>

            <div className="option-container clients-container">
                <div className="overlay overlay--full">
                    <div className="icon-container">
                        <span>i</span>
                    </div>

                    <div className="info-container">
                        <p>Lorem ipsum dolor, sit amssaapet consectetur adipisicing elit. Velit, quasi vero? In distinctio accusantium, culpa perferendis praesentium illum voluptatum odio! Voluptatum labore molestiae necessitatibus ducimus. Nihil accusantium iure repudiandae error.</p>
                        <Link to="/admin/Users"><span>Klienci</span></Link>
                    </div>
                </div>
            </div>

            <div className="option-container products-container">
                <div className="overlay overlay--full">
                    <div className="icon-container">
                        <span>i</span>
                    </div>

                    <div className="info-container">
                        <p>Lorem ipsum dolor, sit amssaapet consectetur adipisicing elit. Velit, quasi vero? In distinctio accusantium, culpa perferendis praesentium illum voluptatum odio! Voluptatum labore molestiae necessitatibus ducimus. Nihil accusantium iure repudiandae error.</p>
                        <Link to="/admin/Products"><span>Produkty</span></Link>
                    </div>
                </div>
            </div>

            <div className="option-container opinion-container">
                <div className="overlay overlay--full">
                    <div className="icon-container">
                        <span>i</span>
                    </div>

                    <div className="info-container">
                        <p>Lorem ipsum dolor, sit amssaapet consectetur adipisicing elit. Velit, quasi vero? In distinctio accusantium, culpa perferendis praesentium illum voluptatum odio! Voluptatum labore molestiae necessitatibus ducimus. Nihil accusantium iure repudiandae error.</p>
                        <Link to="/admin/Opinions"><span>Opinie</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options
