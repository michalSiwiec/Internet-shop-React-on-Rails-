import React, {FC} from 'react'

interface Props {
    province: string,
    setProvince: any
}

const Province:FC<Props> = ({province, setProvince}) => {
    return (
        <div>
            <input type="text" placeholder="Numer domu" value={province} onChange={(e) => setProvince(e.target.value)} />
        </div>
    )
}

export default Province
