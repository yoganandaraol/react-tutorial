import React from 'react';

function User(props) {

    

    return (
        <div className="id-card-wrapper">
            <div className="id-card">
                <div className="profile-row">
                <div className="dp">
                    <div className="dp-arc-outer"></div>
                    <div className="dp-arc-inner"></div>
                    <img src={props.details.avatar_url} />
                </div>
                <div className="desc">
                    <h1>{props.details.name}</h1>
                        <p>Location: {props.details.location}</p>
                        <p>github url: <a href={props.details.html_url}  >Click here</a> </p>
                        <p>Known as: Iron Man</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default User;