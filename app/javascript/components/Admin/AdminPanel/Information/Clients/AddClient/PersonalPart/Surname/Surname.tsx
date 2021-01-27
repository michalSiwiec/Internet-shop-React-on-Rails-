import React, {FC} from 'react'

interface Props {
    surname: string,
    setSurname: any
}

const Surname = ({surname, setSurname}) => {
    return (
        <div>
            <input type="text" placeholder="Nazwisko" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
    )
}

export default Surname
