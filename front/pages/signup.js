import React, { useState, useCallback, memo } from 'react';
import {useInput} from '../hooks'
import { Form, Input, Checkbox, Button } from 'antd';
// input 최적화 ,, 안해도된다.
// const TextInput = memo( ({ name, value, onChange}) => {
//     return (
//         <Input name={name} value={value} onChange={onChange} required />
//     );
// });

const Signup = () => {

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordChk, setPasswordChk] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);


    const onSubmit = useCallback( (e) => {
        e.preventDefault();
        if(password !== passwordChk){
            return setPasswordError(true);
        }if(!term){
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordChk,
            term
        });
    },[password, passwordChk, term ]);

    const onChangePasswordChk = useCallback( (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordChk(e.target.value);
    },[password]);
    const onChangeTerm = useCallback( (e) => {
        setTermError(false);
        setTerm(e.target.checked);
        // setTerm(!term);
    },[term]);


    return(
        <>
            <Form onSubmit={onSubmit} style={{ padding: 10}}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="user-pass">비밀번호</label>
                    <br/>
                    <Input name="user-pass" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-pass-chk">비밀번호체크</label>
                    <br/>
                    <Input name="user-pass-chk" type="password" value={passwordChk} required onChange={onChangePasswordChk} />
                    {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" htmlValue={term} onChange={onChangeTerm}>동의함</Checkbox>
                    {termError && <div style={{color:'red'}}>동의해 주세요.</div>}
                </div>
                <div style={{marginTop: 10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    );
};

export default Signup;