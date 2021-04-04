import React, {FC} from 'react'

import {Link, useRouteMatch} from 'react-router-dom'

interface Props {
    type?: string,
    userID?: number,
    value?: string
}

const TableRow:FC<Props> = ({type, userID, value}) => {
    const {path} = useRouteMatch()

    return (
        <>
            {
                type === "button"
                ? (
                    <td>
                        <Link to={`${path}/userOrder/${userID}`}>
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
