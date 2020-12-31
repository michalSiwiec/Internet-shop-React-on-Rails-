import React, {FC} from 'react'

import ProductMenuOption from './ProductsMenuOption/ProductMenuOption' 

interface Props {}

const ProductsMenu: FC<Props> = ({}) => {
    return (
        <div className="products-menu-container">
            <h2 className="header">Kategorie</h2>
            <div>
                <ul className="menu-option-list">
                    <ProductMenuOption value="Polecane" path=""/>
                    <ProductMenuOption value="Mięso" path=""/>
                    <ProductMenuOption value="Swieze ryby" path=""/>
                    <ProductMenuOption value="Owoce i warzywa" path=""/>
                    <ProductMenuOption value="Mrozonki" path=""/>
                    <ProductMenuOption value="Nabiał" path=""/>
                    <ProductMenuOption value="Kawa i herbata" path=""/>
                    <ProductMenuOption value="Słodycze" path=""/>
                    <ProductMenuOption value="Konserwy" path=""/>
                    <ProductMenuOption value="Wszystko" path=""/>
                </ul>
            </div>    
        </div>
    )
}

export default ProductsMenu
