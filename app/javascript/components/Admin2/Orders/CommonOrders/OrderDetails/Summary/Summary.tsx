import React, {FC} from 'react'

interface Props{value: string}

const Summary:FC<Props> = ({value}) => <p>{value}</p>

export default Summary
