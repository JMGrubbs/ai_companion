import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ changeScreen }) => {

    return (
        <div className={`sidebar`}>
            <div className={`list-holder`}>
                <ul>
                    <div className={`item-holder`}>
                        {/* <Link to='/hello-world/' style={{ textDecoration: 'none' }}> */}
                        <span>
                            <li className={`list-item`} onClick={() => changeScreen("home")}>
                                John Grubbs
                            </li>
                        </span>
                        {/* </Link> */}
                    </div>
                    <div className={`item-holder`}>
                        {/* <Link to='/hello-world/projects' style={{ textDecoration: 'none' }}> */}
                        <span>
                            <li className={`list-item`} onClick={() => changeScreen("projects")}>
                                Projects
                            </li>
                        </span>
                        {/* </Link> */}
                    </div>
                    <div className={`item-holder`}>
                        {/* <Link to='/hello-world/about' style={{ textDecoration: 'none' }}> */}
                        <span>
                            <li className={`list-item`}>
                                About
                            </li>
                        </span>
                        {/* </Link> */}
                    </div>
                    <div className={`item-holder`}>
                        {/* <Link to='/hello-world/contact' style={{ textDecoration: 'none' }}> */}
                        <span>
                            <li className={`list-item`}>
                                Contact
                            </li>
                        </span>
                        {/* </Link> */}
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;