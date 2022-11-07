import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../../components/Posts/Posts'
import User from '../../components/user/User'
import './profile.scss'

const Profile = () => {
    return (
        <div className='profile'>
            <Navbar types='profile' />
            <User />
        </div>
    )
}

export default Profile