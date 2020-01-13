import React, { useState, useCallback } from 'react';
import {useInput} from '../hooks';
import {Button, Form, Input} from "antd";
import Link from "next/link";

const LoginForm = ({}) => {

    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log({
            id, password
        });
    }, [id, password]);

    return(
        <Form onSubmit={onSubmitForm} style={{padding:'10px'}}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-passWord">비밀번호</label>
                <br />
                <Input name="user-passWord" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    );
};

export default LoginForm;