import React from 'react'
import IconLibrary from '../../ui/IconLibrary'
import type { IconResource } from '../../ui/IconLibrary'
import { NavLink as Link } from 'react-router-dom'

interface NavbarItemProps {
    name: string,
    label: string,
    route: string,
    icon: IconResource
}

const NavbarItem: React.FC<NavbarItemProps> = props => {
    return (
        <li className="navbar-item">
            <Link to={props.route} activeClassName="active">
                <label className=".label">{props.label}</label>
                <div className="icon">
                    {IconLibrary.get(props.icon)}
                </div>
            </Link>
        </li>
    )
}

export default NavbarItem
