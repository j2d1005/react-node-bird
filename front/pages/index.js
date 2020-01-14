import React from "react";  // 안써도된다 next에서 자동으로 해줌 그런데 hooks 쓸거면 어짜피 써야됨..
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector } from 'react-redux';

// const dummy = {
//     inLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [{
//         User: {
//             id: 1,
//             nickname: '홍삼',
//         },
//         content: '첫 번째 게시글',
//         img: '/images/hongsam.png',
//     }],
// };

const Home = () => {

    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    return (
        <div>
            {isLoggedIn && <PostForm />}

            {mainPosts.map((c) => {
                return(
                    <PostCard key={c} post={c} />
                );
            })}
        </div>
    );
};

export default Home;

//기존 props 전달하는 방식도 있고 이렇게 전달하는 jsx를 통째로 전달할 수도 있다. 얘네들이 children이다.