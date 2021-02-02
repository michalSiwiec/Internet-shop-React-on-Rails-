import React, {FC} from 'react'

interface Props {
    keyWord: any,
    setKeyWord: any
}

const ProductKeyWord:FC<Props> = ({keyWord, setKeyWord}) => {


    return (
        <div className="input-container">
            <label>Słowa kluczowe
                <input type="text" value={keyWord.value} onChange={(e) => setKeyWord({value: e.target.value, setted: true})}/>
            </label>
        </div>
    )
}

export default ProductKeyWord
