import React, {FC} from 'react'

interface Props {value: string}

const InfoField:FC<Props> = ({value}) => <div className="info-container"><p>{value}</p></div>

export default InfoField
