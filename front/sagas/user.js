import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios'
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../reducers/user";

function* loginAPI() {
    // 서버에 요청하는 부분
    return axios.post('/login');
}

function* login() {
    try {
        yield call(loginAPI); // call 은 동기식 서버로요청 보낸것이완료 되어야 밑에 부분 실행 // fork로 하면 응답 오기전에 밑에 함수가 실행된다.
        yield put({ // put = dispatch
            type: LOG_IN_SUCCESS,
        })
    }catch (e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
    // takeLatest 는 여러번 호출이 오면 완료되지 않은 이전 호출은 무시함
    // tackEvery 는 여러번 호출 오면 전부 실행
}

function* signUpAPI() {
    return axios.post('/signUp');
}

function* signUp() {
    try {
        yield call(signUpAPI);
        yield put({
            type: SIGN_UP_SUCCESS,
        })
    }catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
        });
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);

}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignin),
    ]);
}