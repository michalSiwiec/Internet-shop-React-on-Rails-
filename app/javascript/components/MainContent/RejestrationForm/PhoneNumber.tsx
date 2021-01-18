import React, {FC} from 'react'

interface Props {
    phoneNumber: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPhoneNumber:any
}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) => {
    const checkPhoneNumber = (value:string) => {
        const req = /^[0-9]{9}$/
        const copyPhoneNumber = {...phoneNumber}

        copyPhoneNumber.value = value

        if(req.test(value)){
            copyPhoneNumber.setted = true
            copyPhoneNumber.mistakeInformation = []
        } else{
            copyPhoneNumber.setted = false
            copyPhoneNumber.mistakeInformation = [
                '* Numer telefonu powinnien składać się z 9 cyfr!',
            ]
        }

        setPhoneNumber(copyPhoneNumber)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Nr. telefonu" onChange={(e) => checkPhoneNumber(e.target.value)}/>
            </div>

            <div className="mistake-information-container">
                {phoneNumber.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default PhoneNumber
