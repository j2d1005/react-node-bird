import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    return(
        <div style={{ marginTop: '10px' }}>
            <NicknameEditForm />
            <List
                style={{marginBottom:'20px'}}
                grid={{gutter: 4, xs: 2, md: 3}}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width:'100%' }}>더 보기</Button>}
                bordered
                dataSource={['홍삼', '노드버드', '스터디']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px' }}>
                        <Card actions={[<Icon type="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
            <List
                style={{marginBottom:'20px'}}
                grid={{gutter: 4, xs: 2, md: 3}}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width:'100%' }}>더 보기</Button>}
                bordered
                dataSource={['홍삼', '노드버드', '스터디']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px' }}>
                        <Card actions={[<Icon type="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Profile;