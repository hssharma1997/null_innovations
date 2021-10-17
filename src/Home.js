import React from 'react'
import Navbar from './Navbar.js'
import Posts from './Posts.js'

export default function Home({ postdata, userinfo }) {

    return (
        <div>
            <Navbar />
            {postdata && userinfo && postdata.filter((element, index) => { return (index % 10) === 1 })
                .map((post) => {
                    return (<Posts key={post.id} post={post} userinfo={userinfo[post.userId - 1]} />)
                })}

        </div>
    )
}
