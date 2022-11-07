import React from 'react'
import './write.scss'
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BallotIcon from '@mui/icons-material/Ballot';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Write = () => {
    return (
        <div className='write'>
            <div className="user">
                <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
            </div>
            <div className="container">
                <textarea placeholder='¿Qué está pasando?' ></textarea>
                <div className='utils'>
                    <div className="icons">
                        <BrokenImageIcon />
                        <GifBoxIcon />
                        <BallotIcon />
                        <SentimentSatisfiedAltIcon />
                        <CalendarMonthIcon />
                        <LocationOnIcon />
                    </div>
                    <button>Twittear</button>
                </div>
            </div>
        </div>
    )
}

export default Write