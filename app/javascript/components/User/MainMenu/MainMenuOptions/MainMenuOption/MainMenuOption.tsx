import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

interface Props{
   value: string
   path: string
}

const MainMenuOption:FC<Props> = ({value, path}) => {
   return(
      <NavLink to={path} activeClassName="active">
         <li className="list__item">{value}</li>
      </NavLink>
   )
}

export default MainMenuOption;