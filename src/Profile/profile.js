import React from 'react';
import propTypes from 'prop-types';

export const Profile = ({FullName, profession, bio, children, alert})=>{
    const style={
        textShadow: '2px 2px',
        color:'brown'
    }
    const style1 = {
        boxShadow:'2px 2px',
        border: '1px solid black',
        width:'600px',
        margin: '30px auto '

    }
    return(
    <div>
        <h1 onClick={alert} style={style}>{FullName}</h1>
        <h3 style={{fontStyle:'italic'}}>{profession}</h3>
        <p style={style1}>{bio}</p>
        {children}
    </div>
    )  
}

Profile.defaultProps = {
    FullName: 'User FullName',
    profession: 'Student',
    bio: 'user Bio',
    children: <img src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' alt='user'></img>
    
}

Profile.propTypes = {
    FullName : propTypes.string.isRequired,
    profession: propTypes.string,
    bio : propTypes.string,
    alert : propTypes.func
}