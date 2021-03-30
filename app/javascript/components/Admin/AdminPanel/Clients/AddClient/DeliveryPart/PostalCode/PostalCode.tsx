import React, {FC, useEffect} from 'react'

interface Props {
    postalCode: string,
    setPostalCode: (postalCode: string) => void,
    city: string
}

const PostalCode:FC<Props> = ({postalCode, setPostalCode, city}) => {
    useEffect(() => {
        fetch(`/api/v1/cities/show?city_name=${city}`,{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.text()
            else
                throw Error(response.statusText);
        })
        .then((postalCode_: string) => setPostalCode(postalCode_))
    }, [city])

    return (
        <div className="input-container">
            <p>Kod pocztowy</p>
            
            <select disabled className="input-container__input" >
                <option>{postalCode}</option>
            </select>
        </div>
    )
}

export default PostalCode
