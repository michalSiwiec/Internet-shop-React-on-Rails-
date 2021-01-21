import React, {FC} from 'react'

interface Props {
    setSource: any,
    source: any
}

const ProductPicture:FC<Props> = ({setSource}) => {
    return (
        <div className="input-container">
            {/* <div>
                <img src={source} alt="Zdjęcie produktu"/>
            </div> */}

            <div>
                <label>Zdjęcie
                    <input type="file"/>
                </label>
            </div>
        </div>
    )
}

export default ProductPicture
