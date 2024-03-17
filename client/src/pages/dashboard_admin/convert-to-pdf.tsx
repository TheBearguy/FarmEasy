import React from "react";

const Profile: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex justify-center gap-y-2 flex-col items-center h-[90vh] ">
            <h1 className="text-5xl font-bold">ADMIN PROFILE</h1>
            <p className="text-xl">To-do</p>
            {children}
        </div>
    );
};

export default Profile;
