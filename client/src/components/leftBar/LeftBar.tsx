import React, { useState } from 'react'
import './leftbar.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MenuIcon from '@mui/icons-material/Menu';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TagIcon from '@mui/icons-material/Tag';
import { Link } from 'react-router-dom'
const LeftBar = () => {

    const [animation, setAnimation] = useState<string>('')
    const [index, setIndex] = useState<number | null>(null)

    const handleAnimation = (type: string, i: number | null) => {
        setIndex(i)
        if (type === 'in') {
            setAnimation('animationIn')
        } else if (type === 'out') {
            setAnimation('animationOut')
        }
    }

    return (
        <div className="leftBar">
            <div className='menu'>
                <div className="top">
                    <Link to='/'>
                        <div onMouseEnter={() => { handleAnimation('in', 0) }} onMouseLeave={() => { handleAnimation('out', 0) }} className={`item twitterIcon ${index === 0 ? animation : ''}`}>
                            <TwitterIcon fontSize="large" />
                        </div>
                    </Link>
                    <Link to='/'>
                        <div onMouseEnter={() => { handleAnimation('in', 1) }} onMouseLeave={() => { handleAnimation('out', 1) }} className={`item ${index === 1 ? animation : ''}`}>
                            <HomeIcon fontSize="large" /> Inicio
                        </div>
                    </Link>
                    <div onMouseEnter={() => { handleAnimation('in', 2) }} onMouseLeave={() => { handleAnimation('out', 2) }} className={`item ${index === 2 ? animation : ''}`}>
                        <TagIcon fontSize="large" /> Explorar
                    </div>
                    <div onMouseEnter={() => { handleAnimation('in', 3) }} onMouseLeave={() => { handleAnimation('out', 3) }} className={`item ${index === 3 ? animation : ''}`}>
                        <NotificationsNoneIcon fontSize="large" /> Notificaciones
                    </div>
                    <div onMouseEnter={() => { handleAnimation('in', 4) }} onMouseLeave={() => { handleAnimation('out', 4) }} className={`item ${index === 4 ? animation : ''}`}>
                        <MailOutlineIcon fontSize="large" /> Mensajes
                    </div>
                    <div onMouseEnter={() => { handleAnimation('in', 5) }} onMouseLeave={() => { handleAnimation('out', 5) }} className={`item ${index === 5 ? animation : ''}`}>
                        <BookmarkBorderIcon fontSize="large" /> Guardados
                    </div>
                    <div onMouseEnter={() => { handleAnimation('in', 6) }} onMouseLeave={() => { handleAnimation('out', 6) }} className={`item ${index === 6 ? animation : ''}`}>
                        <MenuIcon fontSize="large" /> Listas
                    </div>
                    <div onMouseEnter={() => { handleAnimation('in', 7) }} onMouseLeave={() => { handleAnimation('out', 7) }} className={`item ${index === 7 ? animation : ''}`}>
                        <Person2Icon fontSize="large" /> Perfil
                    </div>
                    <div onMouseEnter={() => { handleAnimation('in', 8) }} onMouseLeave={() => { handleAnimation('out', 8) }} className={`item ${index === 8 ? animation : ''}`}>
                        <MoreHorizIcon fontSize="large" /> Mas opciones
                    </div>
                </div>
                <div className="user">
                    <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
                    <div className='userInfo'>
                        <h2>Pepe</h2>
                        <p>@Argento</p>
                    </div>
                    <div className='moreContainer'>
                        <MoreHorizIcon className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar