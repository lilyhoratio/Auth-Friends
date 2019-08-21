import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

// components
import Friend from './Friend'
import FriendForm from './FriendForm'

const FriendsList = () => {

    const [friendsList, setFriendsList] = useState([])
    const [isLoading, setLoading] = useState(true)

    console.log(isLoading)

    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
            .then(res => {
                console.log("FRIENDS API - GET RESPONSE:", res.data)
                setFriendsList(res.data)
                setLoading(false)
            })
            .catch(err => console.log("FRIENDS API - GET ERROR", err))
    }, [])

    console.log(friendsList)

    return (

        <div className="friends-list">
            <FriendForm />
            <h2>My friends</h2>
            {isLoading ? "Loading..." : friendsList.map(friend => <Friend key={friend.id} friend={friend} />)}
        </div>

    )
}

export default FriendsList