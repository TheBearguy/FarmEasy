import React from "react";

const Profile: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <h1>Profile</h1>
            {children}
        </div>
    );
};

export default Profile;
