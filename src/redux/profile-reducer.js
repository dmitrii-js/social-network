const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ],
  newPostText: "it-kamasutra.com",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 2,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};