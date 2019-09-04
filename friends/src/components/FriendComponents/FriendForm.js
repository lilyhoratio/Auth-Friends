import React, { useState } from 'react'
// import axios from 'axios'
// import { axiosWithAuth } from '../../utils/axiosWithAuth'


const FriendForm = ({ addFriend }) => {
    // console.log("Login props: ", props)
    const blankFriend = { name: "", age: "", email: "" }
    const [friend, setFriend] = useState(blankFriend)

    const handleChange = e => {
        setFriend({ ...friend, [e.target.name]: e.target.value })
    }

    // const addFriend = e => {
    //     e.preventDefault()
    //     axiosWithAuth().post("http://localhost:5000/api/friends", friend) // server makes IDs for you
    //         .then(res => {
    //             console.log("API - POST RESPONSE", res)
    //             setFriend(blankFriend)
    //         })
    //         .catch(err => console.log(err))
    // }

    const handleSubmit = e => {
        e.preventDefault()
        addFriend(friend)
        // setFriendList(friend => [...friendList, friend])
        setFriend(blankFriend)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={friend.name}
                placeholder="name"
                onChange={handleChange}
            />
            <input
                type="age"
                name="age"
                value={friend.age}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={friend.email}
                placeholder="email"
                onChange={handleChange}
            />
            <button type="submit">Add friend</button>
        </form>
    )
}

export default FriendForm