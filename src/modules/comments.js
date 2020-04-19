import axios from 'axios';

// action types ----------------------------------------
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';
export const ADD_COMMENT = 'ADD_COMMENT';

// action creators -------------------------------------
const getComments = () => {
  return {
    type: LOAD_COMMENTS,
  };
};
const getCommentsSuccess = (json) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    comments: json,
    receivedAt: Date.now(),
  };
};
const getCommentsError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    error,
  };
};
export const loadComments = () => {
  return (dispatch) => {
    dispatch(getComments());
    return axios
      .get('http://localhost:3301/comments')
      .then((res) => dispatch(getCommentsSuccess(res.data)))
      .catch((err) => dispatch(getCommentsError(err)));
  };
};
export const addComment = (payloads) => {
  return {
    type: ADD_COMMENT,
    payloads,
  };
};

// reducers ----------------------------------------------
const initialState = {
  isFetching: false,
  comments: [],
};

export default function reducer(state = [initialState], action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      console.log(LOAD_COMMENTS);
      return {
        ...state,
        isFetching: true,
        comments: [],
      };
    case LOAD_COMMENTS_SUCCESS:
      console.log(LOAD_COMMENTS_SUCCESS);
      console.log(action.comments);
      return {
        ...state,
        isFetching: false,
        comments: action.comments,
        lastUpdated: action.receivedAt,
      };
    case LOAD_COMMENTS_ERROR:
      console.log(LOAD_COMMENTS_ERROR);
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case ADD_COMMENT:
      console.log(ADD_COMMENT);
      console.log(action);
      return {
        ...state,
        comments: [...state.comments, { id: 4, user: action.payloads.user, text: action.payloads.text }],
      };
    default:
      return state;
  }
}
