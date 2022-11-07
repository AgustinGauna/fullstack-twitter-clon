import React from 'react'
import './user.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const User = () => {
    return (
        <div className='userPage'>
            <div className="pictures">
                <img className='banner' src="https://pbs.twimg.com/profile_banners/230469764/1667428194/1500x500" alt="" />
                <img className='profilePic' src="https://pbs.twimg.com/profile_images/1588539615979372544/QVnbLUNb_400x400.jpg" alt="" />

            </div>
            <div className="buttons">
                <div className="IconContainer">
                    <MoreHorizIcon />
                </div>
                <div className="IconContainer">
                    <MailOutlineIcon fontSize='small' />
                </div>
                <button>Seguir</button>
            </div>
            <div className="userInfo">
                <h1>Cap. Ace McCloud ∞/21M</h1>
                <h2>@allinargy</h2>

                <p className='desc'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et. </p>

                <div className="data">

                    <div className="item">
                        <LocationOnOutlinedIcon />
                        <p>Location</p>
                    </div>
                    <div className="item">
                        <LinkOutlinedIcon />
                        <a href="l">Link</a>
                    </div>
                    <div className="item">
                        <LocationOnOutlinedIcon />
                        <p>Location</p>
                    </div>

                </div>

                <div className="follows">
                    <p><span>638</span> Siguiendo</p>
                    <p><span>1638</span> Seguidores</p>
                </div>

            </div>
        </div>
    )
}

export default User