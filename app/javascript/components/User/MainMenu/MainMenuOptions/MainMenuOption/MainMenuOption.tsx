import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

interface Props{
   value: string
   path: string,
   disabled: boolean
}

const MainMenuOption:FC<Props> = ({value, path, disabled}) => {
   return(
      <NavLink to={path} activeClassName="active" className={disabled ? "disabled" : ""}>
         <li className="list__item">{value}</li>
      </NavLink>
   )
}

export default MainMenuOption;