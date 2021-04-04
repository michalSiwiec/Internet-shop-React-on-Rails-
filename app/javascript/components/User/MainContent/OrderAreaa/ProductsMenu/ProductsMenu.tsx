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
                    <ProductMenuOption value="Wszystko" id="all-menu-option" setType={setType} type="all" />
                    <ProductMenuOption value="Mięso" id="meats-menu-option" setType={setType} type="meats" />
                    <ProductMenuOption value="Swieze ryby" id="fishes-menu-option" setType={setType} type="fishes" />
                    <ProductMenuOption value="Owoce i warzywa" id="fruit_and_vegetables-menu-option" setType={setType} type="fruits_and_vegetables" />
                    <ProductMenuOption value="Mrozonki" id="frozen-menu-option" setType={setType} type="frozens" />
                    <ProductMenuOption value="Nabiał" id="dairy-menu-option" setType={setType} type="dairy" />
                    <ProductMenuOption value="Kawa i herbata" id="coffe_and_tea-menu-option" setType={setType} type="coffes" />
                    <ProductMenuOption value="Słodycze" id="sweets-menu-option" setType={setType} type="sweets" />
                    <ProductMenuOption value="Konserwy" id="canned-menu-option" setType={setType} type="canned" />
                </ul>
            </div>    
        </div>
    )
}

export default ProductsMenu
