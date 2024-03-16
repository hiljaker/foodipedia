import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { User } from "@src/types/user.types";
import axiosInstance from "@src/utils/axios";
import { hash } from "@src/utils/encryption";
import { sign } from "@src/utils/jwt";

const initialUser: Omit<User, "password"> = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  isAdmin: false,
};

const initialState = {
  user: initialUser,
};

const { actions, reducer: authReducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export default authReducer;

export const { registerSuccess } = actions;

export const register = (data: User) => async (dispatch: Dispatch) => {
  try {
    const { firstName, lastName, email, phone, address } = data;

    const { data: users } = await axiosInstance.get<Omit<User, "password">[]>(
      "/users",
      {
        params: { email },
      }
    );

    if (users.length) {
      throw new Error("Email has been registered");
    }

    const password = await hash(data.password);

    const body: Partial<User> = {
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
      isAdmin: false,
    };

    const { data: newUser } = await axiosInstance.post<Partial<User>>(
      "/users",
      body
    );

    delete newUser.password;

    dispatch(registerSuccess(newUser));

    const accessToken = sign({ id: newUser.id, email: newUser.email });

    localStorage.setItem("access-token", accessToken);
  } catch (error) {
    console.log(error);
  }
};
