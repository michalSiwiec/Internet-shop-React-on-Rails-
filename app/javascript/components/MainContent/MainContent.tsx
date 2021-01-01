import React, {useState, useEffect} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import ProductsMenu from './ProductsMenu/ProductsMenu'
import Advertisement from './Advertisement/Advertisement'
import OrderArea from './OrderArea/OrderArea'

import '../../../assets/stylesheets/mainContent.scss'

interface IProducts{
    id: number
    source: string
    description: string
    price: number
    key_word: string
    product_type: string
}

const MainContent = () => {

    const [products, setProducts] = useState<IProducts[]>([])
    const [selectedType, setSelectedType] = useState<string>("all")

    const setType = (id:string) => {
        switch (id) {
            case 'meats-menu-option':
                setSelectedType('meats')
                break
            case 'fishes-menu-option':
                setSelectedType('fishes')
                break
            case 'fruit_and_vegetables-menu-option':
                setSelectedType('fruits_and_vegetables')
                break
            case 'frozen':
                setSelectedType('frozens')
                break
            case 'dairy-menu-option':
                setSelectedType('dairy')
                break
            case 'coffe_and_tea-menu-option':
                setSelectedType('coffes')
                break
            case 'sweets-menu-option':
                setSelectedType('sweets')
                break
            case 'all-menu-option':
                setSelectedType('all')
                break
            default:
                break;
        }
    }

    // useEffect(() => {
    //     // setTimeout(() => {
    //         fetch('/products')
    //         .then(response => response.json())
    //         .then(data => setProducts(data))
    //     // },3000)
    // },[])

    return(
        <Switch>
            <Route path="/home/" exact>
                <Redirect to="/home/Offer/"/>
            </Route>

            <Route path="/home/Offer/">
                <div className="main-content-container">
                    <ProductsMenu setType={setType}/>
                    <OrderArea products={products} selectedType={selectedType}/>
                    <Advertisement />
                </div>
            </Route>

            <Route path="/home/Newspaper/">
                <p>Newspaper</p>
            </Route>

            <Route path="/home/Recipies/">
                <p>Recipies</p>
            </Route>

            <Route path="/home/ClientsApp/">
                <p>ClientsApp</p>
            </Route>

            <Route>Nie ma takiej podstrony!</Route>
        </Switch>            
    )
}

export default MainContent;