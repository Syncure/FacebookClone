import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Story.css";

function Story({ image, profileSrc, title }) {
    return (
        <div classNames="story" style={{ backgroundImage: `url(${image})` }}  id="aa">
            <Avatar id="story__avatar" className="story__avatar" src={profileSrc} />
            <h4 id="title">{title}</h4>
        </div>
    );
}

export default Story
