import React, {FC} from 'react'

interface Props {
    type: string,
    setType: any
}

const ProductType:FC<Props> = ({type, setType}) => {
    const types = [
        {
            name: 'Mięso',
            value: 'meats'
        },
        {
            name: 'Ryby',
            value: 'fishes'
        },
        {
            name: 'Owoce i warzywa',
            value: 'fruits_and_vegetables'
        },
        {
            name: 'Nabiał',
            value: 'dairy'
        },
        {
            name: 'Mrozonki',
            value: 'frozens'
        },
        {
            name: 'Kawa',
            value: 'coffes'
        },
        {
            name: 'Słodycze',
            value: 'sweets'
        }
    ]

    const selectedType = types.filter(type_ => type_.value === type)[0].name

    return (
        <div className="input-container">
            <label>Typ produktu
                <select value={selectedType} onChange={(e) => {
                    const selectedValue = types.filter(type_ => type_.name === e.target.value)[0].value
                    setType(selectedValue)
                }}>
                    {types.map(type => <option key={`type${type.name}`}>{type.name}</option>)}
                </select>
            </label>
        </div>
    )
}

export default ProductType
