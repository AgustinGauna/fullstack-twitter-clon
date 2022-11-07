import React, { useState } from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import './posts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faRetweet, faShare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Posts = () => {

    const [animation, setAnimation] = useState<string>('')
    const [display, setDisplay] = useState<number | null>(null)

    const posts = [
        {
            id: 1,
            name: "pepe",
            user: "@pepe",
            profilePic: "https://pbs.twimg.com/profile_images/1474092254486802435/xcjPmpjV_400x400.jpg",
            content: "Kanye just posted a conversation where a certain Harley tells him to cooperate or else he will send him back to a mental hospital and get medicated and stay in zombieland forever",
            postImg: "",
            replies: 10,
            likes: 5,
            rts: 20
        },
        {
            id: 2,
            name: "pepe",
            user: "@pepe",
            profilePic: "https://pbs.twimg.com/profile_images/1474092254486802435/xcjPmpjV_400x400.jpg",
            content: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAword-wrap: break-word;word-wrap: break-word;word-wrap: break-word;word-wrap: break-word;word-wrap: break-word;word-wrap: break-word;word-wrap: break-word;A",
            postImg: "",
            replies: 10,
            likes: 5,
            rts: 20
        },
        {
            id: 3,
            name: "pepe",
            user: "@pepe",
            profilePic: "https://pbs.twimg.com/profile_images/1474092254486802435/xcjPmpjV_400x400.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit culpa aspernatur fuga voluptatibus, quos quia rem delectus adipisci veniam commodi dolore veritatis quis ut reprehenderit expedita? Similique magnam nihil quas cum? Architecto nemo voluptates commodi voluptatibus ut? Dolorum, dolores?",
            postImg: "https://pbs.twimg.com/media/Fgq_ZZCXgAAp6Q4?format=jpg&name=900x900",
            replies: 10,
            likes: 5,
            rts: 20
        },
        {
            id: 4,
            name: "pepe",
            user: "@pepe",
            profilePic: "https://pbs.twimg.com/profile_images/1474092254486802435/xcjPmpjV_400x400.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit culpa aspernatur fuga voluptatibus, quos quia rem delectus adipisci veniam commodi dolore veritatis quis ut reprehenderit expedita? Similique magnam nihil quas cum? Architecto nemo voluptates commodi voluptatibus ut? Dolorum, dolores?",
            postImg: "",
            replies: 10,
            likes: 5,
            rts: 20
        },
        {
            id: 5,
            name: "pepe",
            user: "@pepe",
            profilePic: "https://pbs.twimg.com/profile_images/1474092254486802435/xcjPmpjV_400x400.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit culpa aspernatur fuga voluptatibus, quos quia rem delectus adipisci veniam commodi dolore veritatis quis ut reprehenderit expedita? Similique magnam nihil quas cum? Architecto nemo voluptates commodi voluptatibus ut? Dolorum, dolores?",
            postImg: "",
            replies: 10,
            likes: 5,
            rts: 20
        },

    ]


    const handleAnimationIn = (i: number) => {
        setDisplay(i)
        setAnimation('animationIn')
    }

    return (
        <div className='posts'>
            {posts.map((post, index) => {
                return (
                    <div onMouseEnter={() => { handleAnimationIn(index) }} onMouseLeave={() => { setAnimation('animationOut') }} key={post.id} className={`post ${index === display ? animation : ''}`}>
                        <div className="contentContainer">
                            <Link to={`/profile/asd`}>
                                <div className="userImg">
                                    <img src={post.profilePic} alt="" />
                                </div>
                            </Link>
                            <div className="content">
                                <div className="user">
                                    <p>{post.name}</p> <p className='hashtag'>{post.user}</p>
                                </div>
                                <p>{post.content}</p>
                                <div className="imgContainer">
                                    {post.postImg.length > 0 ? <img src={post.postImg} /> : <></>}
                                </div>
                                <div className="interactions">
                                    <div className="item">
                                        <div className="background">
                                            <FontAwesomeIcon icon={faComment} />
                                        </div>
                                        <p className='pepe'>{post.replies}</p>
                                    </div>
                                    <div className="item">
                                        <FontAwesomeIcon icon={faRetweet} />
                                        <p>{post.rts}</p>
                                    </div>
                                    <div className="item">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <p>{post.likes}</p>
                                    </div>
                                    <div className="item">
                                        <FontAwesomeIcon icon={faShare} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}

        </div>
    )
}

export default Posts



