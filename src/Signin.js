import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'


export default function Signin() {

    const [name, setName] = useState("");

    const HandleformSubmit = () => {
        localStorage.setItem('user', name);
    }
    return (
        <div>
            <div className="signin">
                <div className="signin_form">

                    <form>
                        <input type="text" placeholder="Username..." value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input type="password" placeholder="Password" />
                        <button onClick={HandleformSubmit}>
                            <Link to="/loggedin">Sign In</Link>
                        </button>
                    </form>
                </div>

            </div>


        </div>
    )
}
