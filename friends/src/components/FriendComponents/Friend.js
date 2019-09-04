import React from 'react'
import { Link } from 'react-router-dom'

const Friend = props => {

    const { id, name, age, email } = props.friend

    const deleteFriend = props.deleteFriend

    return (
        <div className="friend">
            <h3>{name}</h3>
            <p>{age} years old</p>
            <p>{email}</p>
            <div>
                <Link to={`/edit/${id}`}>edit</Link>
                <button onClick={() => deleteFriend(id)}>delete</button>
                {/* <button>Edit</button> */}
            </div>
        </div>
    )
}

export default Friend