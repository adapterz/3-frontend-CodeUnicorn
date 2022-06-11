import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuth {
  auth?: { isLogined: boolean };
  isLogined: boolean;
  userId: number;
  image: string;
}

export const auth = createSlice({
  name: "user",
  initialState: { isLogined: false, userId: 0, image: "" } as IAuth,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<IAuth>) => {
      return {
        ...state,
        isLogined: payload.isLogined,
        userId: payload.userId,
        image: payload.image,
      };
    },
  },
});

export const { loginUser } = auth.actions;

export default auth.reducer;
