import React, {FC} from 'react'

interface Props {
    value: number
    changeProductsContainer(e:any): void
    id: string
}

const Switch:FC<Props> = ({value, changeProductsContainer, id}) => <span className="switch" onClick={changeProductsContainer} id={id}>{value}</span>

export default Switch
