import React from "react";
import './Logo.scss'
import {Link} from "react-router-dom";

export const Logo: React.FC = () => {
    return (
        <div className="logo">
            <Link to="/">
                <h1>Logo</h1>
            </Link>
        </div>
    );
};
