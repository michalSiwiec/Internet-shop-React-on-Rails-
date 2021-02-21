import React, {FC} from 'react'

interface Props {
    type: string,
    setType: (type: string) => void
}

const Type:FC<Props> = ({type, setType}) => {
    const types = [
        {
            name: 'Mieso',
            type: 'meats'
        },
        {
            name: 'Ryby',
            type: 'fishes'
        },
        {
            name: 'Owoce i warzywa',
            type: 'fruits_and_vegetables'
        },
        {
            name: 'Nabiał',
            type: 'dairy'
        },
        {
            name: 'Mrozonki',
            type: 'frozen'
        },
        {
            name: 'Kawa',
            type: 'coffe'
        },
        {
            name: 'Słodycze',
            type: 'sweets'
        }
    ]

    return (
        <div className="add-user-form__input-container">
            <div className="add-user-form__input-container__label-container">
                <label className="add-user-form__input-container__label"> Typ produktu</label>
            </div>
            
            <div>
                <select value={type} onChange={(e) => setType(e.target.value) } className="add-user-form__input-container__input">
                    {types.map(type_ => <option value={type_.type} key={type_.name}>{type_.name}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Type
