import React, {FC, useState} from 'react'

interface Props {
    name: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setName:any
}

const Name:FC<Props> = ({name, setName}) => {
    const checkName = (value:string) => {
        const req = /^[A-Z]{1}[a-z]{2,}$/
        const copyName = {...name}

        copyName.value = value

        if(req.test(value)){
            copyName.setted = true
            copyName.mistakeInformation = []
        } else{
            copyName.setted = false
            copyName.mistakeInformation = [
                '* Imię powinno mieć minimum 3 znaki!',
                '* Imię powinno składać się z samych liter',
                '* Pierwsza litera powinna być duza'
            ]
        }

        setName(copyName)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Imię" onChange={(e) => checkName(e.target.value)}/>
            </div>

            <div className="mistake-information-container">
                {name.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Name