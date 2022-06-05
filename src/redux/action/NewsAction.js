import * as types from "../action/ActionType"
import { NewsApi } from "../services/NewsApi";

export const saveLogininfo = (data) => (dispatch) => {
  dispatch({
    type: types.SAVE_LOGIN_INFO,
    payload: data,
  });
};

//Get Cities
export const getNews = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.GET_NEWS_START,
      payload: null,
    });

    NewsApi(data).then((res) => {
      if (res) {
        dispatch({
          type: types.GET_NEWS_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: types.GET_NEWS_FAIL,
          payload: res,
        });
      }
    });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT,
      payload: "",
    });
  };
};
