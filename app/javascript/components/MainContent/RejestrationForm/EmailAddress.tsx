import React, {FC} from 'react'

interface Props {
    email: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setEmail:any
}

const Email:FC<Props> = ({email, setEmail}) => {
    

    const checkMail = (value:string) => {
        const req = /^[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/
        const copyMail = {...email}

        copyMail.value = value

        if(req.test(value)){
            copyMail.setted = true
            copyMail.mistakeInformation = []
        } else{
            copyMail.setted = false
            copyMail.mistakeInformation = [
                '* Adres E-mail powinien być w formacie JanKowalski@gmail.com',
            ]
        }

        setEmail(copyMail)
    }


    return (
        <div>
            <div>
                <input type="text" placeholder="Adres e-mail" onChange={(e) => checkMail(e.target.value)}/>
            </div>

            <div className="mistake-information-container">
                {email.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Email