import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { APIResponse } from "@src/types/common.types";
import { AuthResultType, User } from "@src/types/user.types";
import axiosInstance from "@src/utils/axios";
import { encrypt } from "@src/utils/encryption";

const initialUser: User = {
  id: null,
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  isAdmin: false,
  picture: "",
  city: "",
  zipCode: "",
  isVerified: false,
  verifiedAt: null,
  createdAt: null,
  updatedAt: null,
};

const initialState = {
  user: initialUser,
  openModal: false,
  tokenChecked: false,
};

const { actions, reducer: authReducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    loginSuccess: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    tokenValid: (state, action) => {
      state.tokenChecked = true;
      state.user = { ...state.user, ...action.payload };
    },
    tokenInvalid: (state) => {
      state.tokenChecked = true;
      state.user = initialUser;
    },
    logoutSuccess: (state) => {
      state.user = initialUser;
    },
    setLoginModal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});

export default authReducer;

export const {
  registerSuccess,
  loginSuccess,
  tokenValid,
  tokenInvalid,
  logoutSuccess,
  setLoginModal,
} = actions;

export const login =
  (payload: { email: string; password: string; remember: boolean }) =>
  async (dispatch: Dispatch) => {
    try {
      const encryptedPassword = encrypt(payload.password);

      const { data } = await axiosInstance.post<APIResponse<AuthResultType>>(
        "/auth/login",
        { ...payload, password: encryptedPassword }
      );

      const accessToken = data.result.accessToken;

      dispatch(loginSuccess(data.result.user));
      localStorage.setItem("access-token", accessToken);

      dispatch(setLoginModal(false));
    } catch (error) {
      console.log(error);
    }
  };

export const checkToken = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axiosInstance.get<APIResponse<AuthResultType>>(
      "/auth/user-info"
    );

    dispatch(tokenValid(data.result.user));
  } catch (error) {
    console.log(error);

    dispatch(tokenInvalid());
    localStorage.removeItem("access-token");
  }
};

export const signOut = () => (dispatch: Dispatch) => {
  try {
    localStorage.removeItem("access-token");
    dispatch(logoutSuccess());
  } catch (error) {
    console.log(error);
  }
};
