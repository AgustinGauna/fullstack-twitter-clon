import React, { useState } from 'react'
import './rightbar.scss'
import SearchIcon from '@mui/icons-material/Search';


const RightBar = () => {

    const [animation, setAnimation] = useState<string>('')


    const handleAnimation = (type: string) => {
        if (type === 'in') {
            setAnimation('animationIn')
        } else {
            setAnimation('animationOut')
        }
    }


    return (
        <div className='rightbar'>
            <div className="inputContainer">
                <SearchIcon />
                <input placeholder='Buscar en Twitter' type="text" />
            </div>
            <div className="happening">
                <h1>Que está pasando</h1>
                <div className="item">
                    <p>Entretenimiento</p>
                    <h2>Coming soon</h2>
                    <p>2400 Tweets</p>
                </div>
                <div className="item">
                    <p>Tendencias</p>
                    <h2>Coming soon</h2>
                    <p>230 Tweets</p>
                </div>
                <div className="item">
                    <p>Copa America</p>
                    <h2>Coming soon</h2>
                    <p>1760 Tweets</p>
                </div>
                <div className="item">
                    <p>Guerra en Ucrania</p>
                    <h2>Coming soon</h2>
                    <p>60 Tweets</p>
                </div>

                <a href="#">Mostrar más</a>
            </div>
            <div className="follow">
                <h1>A quién seguir</h1>
                <div className="item">
                    <img src="https://pbs.twimg.com/profile_images/1369977476483538944/Bq_RfYyJ_400x400.jpg" alt="" />
                    <div className="userInfo">
                        <h2>Fundación Leo Messi</h2>
                        <p>@fundacionmessi</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="item">
                    <img src="https://pbs.twimg.com/profile_images/1369977476483538944/Bq_RfYyJ_400x400.jpg" alt="" />
                    <div className="userInfo">
                        <h2>Fundación Leo Messi</h2>
                        <p>@fundacionmessi</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="item">
                    <img src="https://pbs.twimg.com/profile_images/1369977476483538944/Bq_RfYyJ_400x400.jpg" alt="" />
                    <div className="userInfo">
                        <h2>Fundación Leo Messi</h2>
                        <p>@fundacionmessi</p>
                    </div>
                    <button>Follow</button>
                </div>

                <a href="#">Mostrar más</a>
            </div>
        </div>
    )
}

export default RightBar