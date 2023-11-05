import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
    return (
        <div>
            <Link to="/userpetlist">pet</Link>
            <Link to="/usergoodlist">good</Link>
        </div>
    );
};

export default UserProfile;
