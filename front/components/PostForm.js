import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
    inLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '홍삼',
        },
        content: '첫 번째 게시글',
        img: '/images/hongsam.png',
    }],
};

const PostForm = () => {
    return(
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" >
            <Input.TextArea maxLength="140" placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <Input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float:'right' }} htmlType="submit">짹쨱</Button>
            </div>
            <div>
                {dummy.imagePaths.map((v, i) => {
                    return(
                        <div key={v} style={{ display:'inline-block' }}>
                            <img src={"http://localhost:3000/" + v} alt={v} style={{ width:"200px"}} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    );
};


export default PostForm;