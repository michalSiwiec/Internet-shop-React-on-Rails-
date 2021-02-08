import React, {FC, useEffect} from 'react'

interface Props {
    city: string,
    setPostalCode: any,
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
        .then(data => setPostalCode(data))
    }

    useEffect(() => fetchPostalCode() ,[city])

    return (
        <div>
            <select disabled>
                <option>{postalCode}</option>
            </select>
        </div>
    )
}

export default PostalCode