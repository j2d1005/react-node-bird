import React from "react";
import { Card, Avatar } from 'antd';

const dummy = {
    Nickname: '홍삼',
    Post: [],
    Followings: [],
    Followers: [],
    inLoggedIn: false,
};

const UserProfile = ({ data }) => {
    return(
        <Card
            actions={[
                <div key="twit">짹짹<br />{dummy.Post.length}</div>,
                <div key="following">팔로윙<br />{dummy.Followings.length}</div>,
                <div key="follower">팔로워<br />{dummy.Followers.length}</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>dummy.Nickname[0]</Avatar>}
                title={dummy.Nickname}
            />
        </Card>
    );
};

export default UserProfile;