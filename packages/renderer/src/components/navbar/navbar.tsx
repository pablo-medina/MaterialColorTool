import React from 'react'
import './navbar.scss'

interface NavbarProps {
    className?: string,
    showLabels?: boolean
}

const Navbar: React.FC<NavbarProps> = props => {
    const nbClass = ['navbar']
    if (props.showLabels) {
        nbClass.push('labels-show')
    } else {
        nbClass.push('labels-hide')
    }
    if (props.className) {
        nbClass.push(props.className)
    }

    return (
        <ul className={nbClass.join(' ')}>
            {props.children}
        </ul>
    )
}

export default Navbar
