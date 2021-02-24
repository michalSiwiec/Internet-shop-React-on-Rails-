import React, {FC, useEffect} from 'react'

interface Props {
    city: string,
    setPostalCode: (postalCode: string) => void,
    postalCode: string
}

const PostalCode:FC<Props> = ({city, setPostalCode, postalCode}) => {

    const fetchPostalCode = () => {
        fetch(`/api/v1/cities/show?city_name=${city}`,{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.text()
            else
                throw Error(response.statusText);
        })
        .then((postalCode_: string) => setPostalCode(postalCode_))
    }

    useEffect(() => fetchPostalCode() ,[city])

    return (
        <div>
            <p className="label-container__label">Kod pocztowy</p>

            <select disabled>
                <option>{postalCode}</option>
            </select>
        </div>
    )
}

export default PostalCode