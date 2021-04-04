import React from 'react'

import {Link, useRouteMatch} from 'react-router-dom'

const Products = () => {
    const {path} = useRouteMatch()

    return (
        <div className="option-container products-container">
            <div className="overlay overlay--full">
                <div className="icon-container">
                    <span>i</span>
                </div>

                <div className="info-container">
                    <p>Lorem ipsum dolor, sit amssaapet consectetur adipisicing elit. Velit, quasi vero? In distinctio accusantium, culpa perferendis praesentium illum voluptatum odio! Voluptatum labore molestiae necessitatibus ducimus. Nihil accusantium iure repudiandae error.</p>
                    <Link to={`${path}Products`}>
                        <span>Produkty</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Products
