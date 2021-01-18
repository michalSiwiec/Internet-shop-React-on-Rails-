import React, {FC} from 'react'

interface Props {
    street: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setStreet:any
}

const Street:FC<Props> = ({street, setStreet}) => {
    
    const validateStreet = (value:string) => {
        const req = /^[A-Z]{1}[a-z]{2,}$/
        const copyStreet = {...street}

        copyStreet.value = value

        if(req.test(value)){
            copyStreet.setted = true
            copyStreet.mistakeInformation = []
        } else{
            copyStreet.setted = false
            copyStreet.mistakeInformation = [
                '* Nazwa ulicy powinna składać się z samych liter!',
                '* Pierwsza litera powinna być pisana duzą literą',
                '* Minimalna liczba zanków to 3!'
            ]
        }

        setStreet(copyStreet)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Ulica" onChange={(e) => validateStreet(e.target.value)}/>
            </div>

            <div className="mistake-information-container">
                {street.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Street
