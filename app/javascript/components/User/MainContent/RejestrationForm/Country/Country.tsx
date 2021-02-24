import React from 'react'

const Country = () => {
    return (
        <div>
            {/* <div className="label-container">
                <p className="label-container__label">Kraj</p>
            </div> */}
            <p className="label-container__label">Kraj</p>


            <select disabled>
                <option defaultValue="Polska">Polska</option>
            </select>
        </div>
    )
}

export default Country
