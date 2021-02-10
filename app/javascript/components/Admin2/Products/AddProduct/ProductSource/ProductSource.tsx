import React, {FC} from 'react'

interface Props {
    source: string,
    setSource: any
}

const ProductSource:FC<Props> = ({source, setSource}) => {
    return (
        <div>
            {/* <label htmlFor="productPicture">Wybierz zdjęcie</label> */}
            <input type="file" name="productPicture" value={source} onChange={(e) => setSource(e.target.value)} />
        </div>
    )
}

export default ProductSource
