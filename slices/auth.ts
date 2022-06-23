import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuth {
  auth?: {
    isLogined: boolean;
    userId: number;
    userName: string;
    image: string;
  };
  isLogined?: boolean;
  userId?: number;
  userName?: string;
  image?: string;
}

export const auth = createSlice({
  name: "user",
  initialState: {
    isLogined: false,
    userId: 0,
    userName: "",
    image: "",
  } as IAuth,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<IAuth>) => {
      return {
        ...state,
        isLogined: payload.isLogined,
        userId: payload.userId,
        userName: payload.userName,
        image: payload.image,
      };
    },
  },
});

export const { loginUser } = auth.actions;

export default auth.reducer;
