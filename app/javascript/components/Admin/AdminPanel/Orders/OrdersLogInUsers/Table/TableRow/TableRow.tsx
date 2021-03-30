import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    type?: string,
    userID?: number,
    value?: string
}

const TableRow:FC<Props> = ({type, userID, value}) => {
    return (
        <>
            {
                type === "button"
                ? (
                    <td>
                        <Link to={`/admin/Orders/userOrder/${userID}`}>
                            <button>Zobacz</button>
                        </Link>
                    </td>
                ) : (
                    <td>{value}</td>
                )
            }
       </>
    )
}

export default TableRow
