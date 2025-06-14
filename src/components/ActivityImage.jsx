import React from 'react';
import './ActivityImage.css';

function ActivityImage({img, name}) {
    const imgUrl = "https://jeonggyul.github.io/" + img
    return (
        <div className="activity-image-container">
            <img src={imgUrl} alt={name} />
        </div>
    );
}

export default ActivityImage;