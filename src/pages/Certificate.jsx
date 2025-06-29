import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Certificate.css';

function Certificate() {
    const [certi, setCerti] = useState(undefined)

    useEffect(() => {
        axios.get("https://jeonggyul.github.io/db.json/certificate")
            .then((data) => {
                setCerti(data.data)
            })
            .catch(() => {
                setCerti(undefined)
            })
    }, [])

    return (
        <div className="certificate-container">
            <h1>자격증</h1>
            <ul>
                {certi === undefined ? <li>로딩중...</li> : certi.map((data) => (
                    <li key={data.id}>{data.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Certificate