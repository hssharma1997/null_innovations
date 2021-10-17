import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Loggedin.css'
import Posts from './Posts'

export default function Loggedin({ postdata, userinfo }) {
    const [searchtitle, setSearchtitle] = useState("")
    const [searchuser, setSearchuser] = useState("")
    const [userpost, setUserpost] = useState([])


    const Handlesubmit = () => {
        if (searchuser !== "") {
            userinfo.forEach((user) => {
                if (user.name.toLowerCase().includes(searchuser.toLocaleLowerCase())) {

                    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                        .then(response => response.json())
                        .then(data => setUserpost(data));
                }
            })
        }
        else {
            setUserpost([])
        }

    }
    return (
        <div>
            <div className="loggedin_navbar">
                <ul>
                    <li><a href="#">Posts</a></li>
                    <li>
                        <p><Link to="/"><a href="">Sign Out</a></Link></p>
                    </li></ul>

            </div>
            <div className="searchbar">
                <form >
                    <input type="text" placeholder="Search By Title" value={searchtitle} onChange={(e) => { setSearchtitle(e.target.value) }} />
                    <input type="text" placeholder="Search By Username" value={searchuser} onChange={(e) => { setSearchuser(e.target.value) }} />
                    <button onClick={Handlesubmit} >Search</button>.
                </form>
            </div>

            {userpost.length === 0 ? (
                postdata && userinfo && postdata.filter((element, index) => { return (index % 10) === 1 })
                    .filter((post) => {
                        if (searchtitle == "") { return post }
                        else if (post.title.toLowerCase().includes(searchtitle.toLowerCase())) { return post }

                    })
                    .map((post) => {
                        return (<Posts key={post.id} post={post} userinfo={userinfo[post.userId - 1]} />)
                    })) :


                (
                    userpost && userinfo && userpost
                        .filter((post) => {
                            if (searchtitle == "") { return post }
                            else if (post.title.toLowerCase().includes(searchtitle.toLowerCase())) { return post }

                        })
                        .map((post) => {
                            return (<Posts key={post.id} post={post} userinfo={userinfo[post.userId - 1]} />)
                        })
                )}
        </div>
    )
}
