import React, {FC} from 'react'

interface Props {
    surname: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setSurname:any
}

const Surname:FC<Props> = ({surname, setSurname}) => {
    const checkSurname = (value:string) => {
        const req = /^[A-Z]{1}[a-z]{2,}$/
        const copySurname = {...surname}

        copySurname.value = value

        if(req.test(value)){
            copySurname.setted = true
            copySurname.mistakeInformation = []
        } else{
            copySurname.setted = false
            copySurname.mistakeInformation = [
                '* Nazwisko powinno mieć minimum 3 znaki!',
                '* Nazwisko powinno składać się z samych liter',
                '* Pierwsza litera powinna być duza'
            ]
        }

        setSurname(copySurname)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Nazwisko" onChange={(e) => checkSurname(e.target.value)}/>
            </div>

            <div className="mistake-information-container">
                {surname.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Surname