import React from "react";

function PasswordEntry({ handlePasswordSubmit }) {
    return (
        <div className="password-entry">
            <input
                type="password"
                onChange={(e) => handlePasswordSubmit(e.target.value)}
                placeholder="Enter Password"
            />
        </div>
    );
}

export default PasswordEntry;