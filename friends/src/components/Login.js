import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    // console.log("Login props: ", props)
    const blankCredentials = { username: "", password: "" }
    const [credentials, setCredentials] = useState(blankCredentials)
    const [isLoading, setLoading] = useState(false)

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const login = e => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", credentials)
            .then(res => {
                console.log("API - GET RESPONSE", res)
                localStorage.setItem("token", res.data.payload)
            })
            .catch(err => console.log(err))
        setCredentials(blankCredentials)
        props.history.push("/protected")
    }

    return (
        <form onSubmit={login}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                placeholder="Username"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                placeholder="Password"
                onChange={handleChange}
            />
            <button>Login</button>
        </form>
    )
}

export default Login