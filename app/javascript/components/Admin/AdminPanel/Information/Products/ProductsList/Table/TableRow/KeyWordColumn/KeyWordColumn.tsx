import React, {FC} from 'react'

interface Props {
    key_word: any
}

const KeyWordColumn:FC<Props> = ({key_word}) => <td><span>{key_word}</span></td>

export default KeyWordColumn
