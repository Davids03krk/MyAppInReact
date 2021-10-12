import React from "react";
import './users.scss';


export default React.memo(function Users() {
    return (
        <div className="users-page">
            <div className="users-page__users">
                Users
            </div>
            <div className="users-page__user-details">
                User Details
            </div>
        </div>
    )
});