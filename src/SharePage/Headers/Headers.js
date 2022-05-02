import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/manage">manage</Link>
                </li>
            </ul>
        </div>
    );
};

export default Headers;