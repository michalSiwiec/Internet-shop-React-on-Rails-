import React, {FC} from 'react'

interface Props {
    type: string,
    setType: any
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
        <div>
            <label> Typ produktu
                <select value={type} onChange={(e) => setType(e.target.value) }>
                    {types.map(type_ => <option value={type_.type} key={type_.name}>{type_.name}</option>)}
                </select>
            </label>
        </div>
    )
}

export default Type
