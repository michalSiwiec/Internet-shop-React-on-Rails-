import React, {FC} from 'react'

interface Props {
    postalCode: string,
    setPostalCode: any
}

const PostalCode:FC<Props> = ({postalCode, setPostalCode}) => {
    return (
        <div>
            <input type="text" placeholder="Kod pocztowy" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>
    )
}

export default PostalCode
