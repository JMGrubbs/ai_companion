import React from 'react';

function Action({ action, text, identity, setIsOpen }) {
    return (
        <div className="dropdown-menu-item" style={{ userSelect: 'none' }} onClick={(e) => setIsOpen(false)}>
            <span onClick={(e) => action(e, identity)}>{text}</span>
        </div>
    );
};

export default Action;
