import React from "react";  // 안써도된다 next에서 자동으로 해줌 그런데 hooks 쓸거면 어짜피 써야됨..

const Home = () => {
    return (
        <>
            <div>Hello, Next!</div>
        </>
    );
};

export default Home;

//기존 props 전달하는 방식도 있고 이렇게 전달하는 jsx를 통째로 전달할 수도 있다. 얘네들이 children이다.