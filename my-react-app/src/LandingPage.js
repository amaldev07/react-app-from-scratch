import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/company/1">Company 1</Link>
                </li>
                <li>
                    <Link to="/company/2">Company 2</Link>
                </li>
            </ul>
        </div>
    );
};

export default LandingPage;
