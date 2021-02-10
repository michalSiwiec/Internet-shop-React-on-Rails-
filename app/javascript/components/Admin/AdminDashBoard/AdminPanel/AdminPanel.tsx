import React, {useRef} from 'react'

import TopMenu from './TopMenu/TopMenu'
import LeftMenu from './LeftMenu/LeftMenu'
import Information from './Information/Information'

const AdminPanel = () => {

    const informationParts = {
        ordersDiagram: useRef(),
        ordersList: useRef(),
        productsList: useRef(),
        clientsList: useRef(),
        statisticDiagrams: useRef(),
        complaintsList: useRef(),
        opinionsList: useRef()
    }

    return (
        <div className="admin-panel-container">
            <TopMenu />
            <LeftMenu informationParts={informationParts}/>
            <Information informationParts={informationParts}/>
        </div>
    )
}

export default AdminPanel
