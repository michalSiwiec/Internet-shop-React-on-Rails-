import React, {FC} from 'react'

import ProductMenuOption from './ProductsMenuOption/ProductMenuOption' 

interface Props {
    setType(id:string):void
}

const ProductsMenu: FC<Props> = ({setType}) => {
    return (
        <div className="products-menu-container">
            <h2 className="header">Kategorie</h2>
            <div>
                <ul className="menu-option-list">
                    <ProductMenuOption value="Wszystko" path="/home/Offer/" id="all-menu-option" setType={setType}/>
                    <ProductMenuOption value="Mięso" path="meats" id="meats-menu-option" setType={setType}/>
                    <ProductMenuOption value="Swieze ryby" path="fishes" id="fishes-menu-option" setType={setType}/>
                    <ProductMenuOption value="Owoce i warzywa" path="fruits_and_vegetables" id="fruit_and_vegetables-menu-option" setType={setType}/>
                    <ProductMenuOption value="Mrozonki" path="frozens" id="dairy-products" setType={setType}/>
                    <ProductMenuOption value="Nabiał" path="dairies" id="dairy-menu-option" setType={setType}/>
                    <ProductMenuOption value="Kawa i herbata" path="coffe_and_tea" id="coffe_and_tea-menu-option" setType={setType}/>
                    <ProductMenuOption value="Słodycze" path="sweets" id="sweets-menu-option" setType={setType}/>
                    <ProductMenuOption value="Konserwy" path="canned" id="canned-menu-option" setType={setType}/>
                </ul>
            </div>    
        </div>
    )
}

export default ProductsMenu
