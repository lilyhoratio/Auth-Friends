import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

// components
import Friend from './Friend'

const FriendsList = () => {

    const [friendsList, setFriendsList] = useState([])

    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
            .then(res => {
                console.log("FRIENDS API - GET RESPONSE:", res.data)
                setFriendsList(res.data)
            })
            .catch(err => console.log("FRIENDS API - GET ERROR", err))
    }, [])

    console.log(friendsList)

    return (
        <div className="friends-list">
            <h1>My friends</h1>
            {friendsList.map(friend => <Friend key={friend.id} friend={friend} />)}
        </div>
    )
}

export default FriendsList