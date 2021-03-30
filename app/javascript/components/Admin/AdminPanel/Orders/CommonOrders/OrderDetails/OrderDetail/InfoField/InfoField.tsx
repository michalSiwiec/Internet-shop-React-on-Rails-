import React, {FC} from 'react'

interface Props {value: string, property: string}

const InfoField:FC<Props> = ({value, property}) => <p>{property}<span className="property-value">{value}</span></p>

export default InfoField