import React from 'react'
import './navbar.scss'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface NavbarProps {
    types: string
}

const Navbar = ({ types }: NavbarProps) => {
    return (
        <div className='navbar'>
            <div className="container">
                {types === 'Inicio' ?
                    <div>
                        <p>{types}</p>
                    </div>
                    :
                    <div className="navigation">
                        <ArrowBackIcon fontSize='medium' className='icon2' />
                        <div className="userInfo">
                            <h1>{types}</h1>
                            <p>12,5 mil Tweets</p>
                        </div>
                    </div>
                }


                {types === 'Inicio' ? <AutoAwesomeIcon className='icon' /> : <></>}
            </div>
        </div>
    )
}

export default Navbar