import React, {FC} from 'react'

interface Props {value: string}

const InfoField:FC<Props> = ({value}) => <p>{value}</p>

export default InfoField
