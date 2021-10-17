import React from 'react'
import user_image from './user_image.png'
import "./Posts.css"
import { Link } from 'react-router-dom'


export default function Posts({ post, userinfo }) {

    return (
        <div className="post_card">
            <div className="profile_name">
                <img src={user_image} alt="user_image" />
                {userinfo && <p><Link to={`./profile/${userinfo.id}`}>{userinfo.name}</Link></p>}
            </div>
            <br />
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>

        </div>
    )
}
