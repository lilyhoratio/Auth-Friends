import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" })
    const [isLoading, setLoading] = useState(false)
    console.log(credentials)

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const login = e => {
        e.preventDefault()
        axios.post()
    }

    return (
        <form >
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