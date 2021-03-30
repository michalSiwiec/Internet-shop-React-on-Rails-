import React from 'react'

import Header from './Header/Header'
import WhatIDo from './WhatIDo/WhatIDo'
import WhoAreYou from './WhoAreYou/WhoAreYou'

const DescriptionPart = () => {
    return (
        <div className="description-part-container">
            <Header />
            <WhatIDo />
            <WhoAreYou />
        </div>
    )
}

export default DescriptionPart


