import React from 'react'
import './Profile.css'
import user_image from './user_image.png'
import { useParams } from 'react-router-dom';

export default function Profile({ userinfo }) {
    const { userId } = useParams();

    return (
        <div className="user_profile">
            <div className="user_info">

                {userinfo.map((user) => {
                    if (user.id == userId) {
                        return (<>
                            <img src={user_image} alt="user_image" />
                            <p>{user.username}</p>
                            <div className="personal_info">
                                <h3>Name:</h3><p>{user.name}</p>
                                <h3>Email:</h3><p>{user.email}</p>
                                <h3>Phone:</h3><p>{user.phone}</p>
                            </div>
                        </>
                        )
                    }
                })}
            </div>

        </div>
    )
}
