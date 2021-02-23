import React, {FC} from 'react'

import Header from './Header/Header'
import Mark from './Mark/Mark'

import "../../../../../../../assets/Fontello//fontello-2faec39f/css/fontello.css"

interface Props {setOpinionMark: (opinion: number) => void}

const Marks:FC<Props> = ({setOpinionMark}) =>  {
    return (
        <div className="marks-container">
            <Header />
            
            <Mark setOpinionMark={setOpinionMark} markValue={1} markDescription="Bardzo słaby" />
            <Mark setOpinionMark={setOpinionMark} markValue={2} markDescription="Słaby" />
            <Mark setOpinionMark={setOpinionMark} markValue={3} markDescription="Sredni" />
            <Mark setOpinionMark={setOpinionMark} markValue={4} markDescription="Dobry" />
            <Mark setOpinionMark={setOpinionMark} markValue={5} markDescription="Bardzo dobry" />
        </div>
    )
}

export default Marks
