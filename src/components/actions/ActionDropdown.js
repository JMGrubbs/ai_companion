import React, { useState, useRef, useEffect } from 'react';
import './actionDropdown.css';
import Action from './Action';

function ThreeDotDropdown({ actions, identity }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
            <button onClick={toggleDropdown} className="three-dot-button">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {actions.map((action, index) => (
                        <Action key={index} action={action.action} text={action.text} identity={identity} setIsOpen={setIsOpen} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThreeDotDropdown;
