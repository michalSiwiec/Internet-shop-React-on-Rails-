import React from 'react'

import {Link} from 'react-router-dom'

const RealizeButton = () => <Link to="/admin/Orders"><button onClick={() => alert('I am realizing order')}>Realizuj zamówienie</button></Link>

export default RealizeButton
