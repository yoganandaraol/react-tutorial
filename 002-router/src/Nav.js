import React from 'react';
import {Link} from 'react-router-dom'

// functional component
function Nav(){
    const navStyle = {
        color: 'white'
      }

    return (
        <div>
            <nav>
                <Link to="/" style={navStyle}>
                    <h2>Logo</h2>
                </Link>
                <ul className="navigation-Links">
                    <Link to="/About" style={navStyle}>
                    <li>About</li>
                    </Link>
                    <Link to="/Shop" style={navStyle}>
                    <li>Shop</li>
                    </Link>
                    <Link to="/Users" style={navStyle}>
                    <li>Users</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;