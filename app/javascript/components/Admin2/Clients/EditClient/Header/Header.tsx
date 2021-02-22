import React, {FC} from 'react'

interface Props {value: string}

const Header:FC<Props> = ({value}) => <h2 className="edit-user-form__header">{value}</h2>

export default Header
