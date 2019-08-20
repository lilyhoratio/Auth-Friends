import React from 'react'

const Friend = props => {

    const { name, age, email } = props.friend
    return (
        <div>
            <h2>{name}</h2>
            <p>{age} years old</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default Friend