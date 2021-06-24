import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from '../Avatar'

function Status() {
    const { auth } = useSelector((state) => state);
    return (
        <div className='status my-3 d-flex'>
            <Avatar src={auth.user.avatar} size='big-avatar' />
            <button className="statusBtn flex-fill">
                {auth.user.username}, what are you thinking?
            </button>
        </div>
    )
}

export default Status
