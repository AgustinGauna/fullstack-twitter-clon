import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../../components/Posts/Posts'
import Write from '../../components/write/Write'
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Navbar types='Inicio' />
            <Write />
            <Posts />
        </div>
    )
}

export default Home