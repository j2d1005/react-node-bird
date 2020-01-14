export const initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: '홍삼',
    },
    content: '첫 번째 게시글',
    img: '/images/hongsam.png',
  }],
  imagePaths: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
  type: ADD_POST,
};
const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: '홍삼',
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
