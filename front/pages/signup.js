import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';
import {useInput} from '../hooks'

// input 최적화 ,, 안해도된다.
// const TextInput = memo( ({ name, value, onChange}) => {
//     return (
//         <Input name={name} value={value} onChange={onChange} required />
//     );
// });

// const TextInput = ({ value }) => (
//   <div>{value}</div>
// );
//
// TextInput.propTypes = {
//   value: PropTypes.string,
// };

const Signup = () => {

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordChk, setPasswordChk] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
    const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      alert('로그인했으니 메인페이지로 이동합니다.');
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordChk) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        id,
        password,
        nick,
      },
    });
  }, [password, passwordChk, term]);

    const onChangePasswordChk = useCallback( (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordChk(e.target.value);
    },[password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        {/*<TextInput value="135135" />*/}
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-chk">비밀번호체크</label>
          <br />
          <Input
            name="user-password-chk"
            type="password"
            value={passwordChk}
            required
            onChange={onChangePasswordChk}
          />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의함</Checkbox>
          {termError && <div style={{ color: 'red' }}>동의해 주세요.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;