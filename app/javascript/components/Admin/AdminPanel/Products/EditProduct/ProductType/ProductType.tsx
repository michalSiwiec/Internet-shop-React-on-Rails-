import React, {FC} from 'react'

interface Props {
    type: string,
    setType: (type: string) => void
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
        <div className="edit-user-form__input-container">
            <div className="edit-user-form__input-container__label-container">
                <label className="edit-user-form__input-container__label">Typ produktu</label>
            </div>

            <div>
                <select className="edit-user-form__input-container__input" value={selectedType} onChange={(e) => {
                    const selectedValue = types.filter(type_ => type_.name === e.target.value)[0].value
                    setType(selectedValue)
                }}>
                    {types.map(type => <option key={`type${type.name}`}>{type.name}</option>)}
                </select>
            </div>
        </div>
    )
}

export default ProductType
