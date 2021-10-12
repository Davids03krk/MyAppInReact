import React from "react";
import './user-posts.scss';


export default React.memo(function UserPosts() {
    return (
        <div className="user-posts-page">
            <div className="user-posts-page__posts">
                Posts
            </div>
            <div className="user-posts-page__comments">
                Comments
            </div>
        </div>
    )
});