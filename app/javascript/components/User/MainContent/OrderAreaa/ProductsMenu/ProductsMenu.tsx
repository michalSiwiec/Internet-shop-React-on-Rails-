import React from 'react'

import {useDispatch} from 'react-redux'
import actions from '../../../../../../redux/products/duck/actions'

import '../../../../../../assets/stylesheets/User/MainMenu/MainMenu.scss'

import ProductMenuOption from './ProductsMenuOption/ProductMenuOption' 

const ProductsMenu = () => {
    const dispatch = useDispatch()

    const setType = (id:string) => {
        const {setType} = actions
        
        switch (id) {
            case 'meats-menu-option':
                dispatch(setType('meats'))
                break
            case 'fishes-menu-option':
                dispatch(setType('fishes'))
                break
            case 'fruit_and_vegetables-menu-option':
                dispatch(setType('fruits_and_vegetables'))
                break
            case 'frozen-menu-option':
                dispatch(setType('frozens'))
                break
            case 'dairy-menu-option':
                dispatch(setType('dairy'))
                break
            case 'coffe_and_tea-menu-option':
                dispatch(setType('coffes'))
                break
            case 'sweets-menu-option':
                dispatch(setType('sweets'))
                break
            case 'canned-menu-option':
                dispatch(setType('canned'))
                    break
            case 'all-menu-option':
                dispatch(setType('all'))
                break
            default:
                break;
        }
    }

    return (
        <div className="products-menu-container">
            <h2 className="header">Kategorie</h2>

            <div>
                <ul className="menu-option-list">
                    <ProductMenuOption value="Wszystko" path="/home/Offer/" id="all-menu-option" setType={setType} />
                    <ProductMenuOption value="Mięso" path="meats" id="meats-menu-option" setType={setType} />
                    <ProductMenuOption value="Swieze ryby" path="fishes" id="fishes-menu-option" setType={setType} />
                    <ProductMenuOption value="Owoce i warzywa" path="fruits_and_vegetables" id="fruit_and_vegetables-menu-option" setType={setType} />
                    <ProductMenuOption value="Mrozonki" path="frozens" id="frozen-menu-option" setType={setType} />
                    <ProductMenuOption value="Nabiał" path="dairies" id="dairy-menu-option" setType={setType} />
                    <ProductMenuOption value="Kawa i herbata" path="coffe_and_tea" id="coffe_and_tea-menu-option" setType={setType} />
                    <ProductMenuOption value="Słodycze" path="sweets" id="sweets-menu-option" setType={setType} />
                    <ProductMenuOption value="Konserwy" path="canned" id="canned-menu-option" setType={setType} />
                </ul>
            </div>    
        </div>
    )
}

export default ProductsMenu
