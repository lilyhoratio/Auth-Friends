import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

// components
import Friend from './Friend'
import FriendForm from './FriendForm'

const FriendsList = () => {

    const [friendsList, setFriendsList] = useState([])
    const [isLoading, setLoading] = useState({ "default": true, "adding": false })

    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
            .then(res => {
                console.log("FRIENDS API - GET RESPONSE:", res.data)
                setFriendsList(res.data)
                setLoading({ ...isLoading, "default": false })
            })
            .catch(err => console.log("FRIENDS API - GET ERROR", err))
    }, [])

    const addFriend = friend => {
        // e.preventDefault()
        axiosWithAuth().post("http://localhost:5000/api/friends", friend) // server makes IDs for you
            .then(res => {
                console.log("API - POST RESPONSE", res)
                // setFriendsList([...friendsList, res.data]) // response was new array, so this added friendList array as 7th element
                // setFriendsList([res.data]) // why not this?
                setLoading({ ...isLoading, "adding": true })
                setTimeout(() => {
                    setFriendsList([...friendsList, friend])
                    setLoading({ ...isLoading, "adding": false })
                }, 700)
            })
            .catch(err => console.log(err))
    }
    console.log(friendsList)

    return (

        <div className="friends-list">
            <FriendForm addFriend={addFriend} />
            <h2>My friends</h2>
            {isLoading.default ? "Loading friends..." : isLoading.adding ? "Adding friend..." : friendsList.map(friend => <Friend key={friend.id} friend={friend} />)}
        </div>

    )
}

export default FriendsList