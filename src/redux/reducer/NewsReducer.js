/* eslint-disable default-case */
import * as types from "../action/ActionType";

const init_state = {
  data: null,
  loading: false,
  loginTime: null,
  error: {
    status: false,
    message: "",
  },

  saveLogininfo: {
    data: null,
    loading: false,
    error: {
      status: false,
      message: "",
    },
  },

  logOut: {
    data: null,
    loading: false,
    loginTime: null,
    error: {
      status: false,
      message: "",
    },
  },

  getNewsList: {
    data: null,
    loading: false,
    error: {
      status: false,
      message: "",
    },
  },
};

const NewsReducer = (state = init_state, action) => {
  switch (action.type) {
    // CHECK USER
    case types.LOGOUT: {
      return {
        data: null,
        loading: false,
        loginTime: null,
        error: {
          status: false,
          message: "",
        },
      };
    }
    //SAVE LOGIN INFO
    case types.SAVE_LOGIN_INFO: {
      console.log("Payload", action.payload);
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    }

    case types.GET_USERS: {
      return {
        ...state,   
        news: action.payload,
        loading: false,
      };
    }


    case types.GET_NEWS_START: {
      return {
        ...state,
        getNewsList: {
          ...init_state.getCitiesList,
          loading: true,
          error: {
            status: false,
            message: "",
          },
        },
      };
    }

    case types.GET_NEWS_SUCCESS: {
      return {
        ...state,
        getNewsList: {
          data: action.payload,
          error: {
            status: false,
            message: "",
          },
          loading: false,
        },
      };
    }

    case types.GET_NEWS_FAIL: {
      return {
        ...state,
        getNewsList: {
          data: action.payload,
          error: {
            status: true,
            message: "",
          },
          loading: false,
        },
      };
    }
  }
  return state;
};

export default NewsReducer;
