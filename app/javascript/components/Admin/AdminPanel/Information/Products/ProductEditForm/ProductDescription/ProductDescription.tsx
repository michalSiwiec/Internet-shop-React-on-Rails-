import React, {FC} from 'react'

interface Props {
    description:any,
    setDescription:any
}

const ProductDescription:FC<Props> = ({description, setDescription}) => {

    // const updateState = (value:any) => {
    //     setDescription({value: value, setted: true})
    // }

    return (
        <div className="input-container">
            <label>Opis produktu
                {/* <input type="text" value={description.value} onChange={(e) => updateState(e.target.value)}/> */}
                <input type="text" value={description.value} onChange={(e) => setDescription({value: e.target.value, setted: true})}/>
            </label>
        </div>
    )
}

export default ProductDescription
