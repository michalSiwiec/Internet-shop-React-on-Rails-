import React, {FC} from 'react'

interface Props{
    rowNumber: number,
    setClassRow: any,
    classRow: Array<string>
}

const Switch:FC<Props> = ({rowNumber, setClassRow, classRow}) => {
    const handleOnClick = () => {
        let testArray = classRow.map(row => row = "hidden")
        testArray[rowNumber] = ""

        setClassRow(testArray)
    }

    return(
        <div className="switch">
            <span onClick={handleOnClick}>{rowNumber + 1}</span>
        </div>
    )
}

export default Switch
